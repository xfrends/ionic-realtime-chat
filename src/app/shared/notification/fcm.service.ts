/* eslint-disable quote-props */
/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import { FCM } from '@awesome-cordova-plugins/fcm/ngx';
import { Storage } from '@capacitor/storage';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FcmService {
  token;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    })
  };
  constructor(
    private fcm: FCM,
    private http: HttpClient
  ) {
    this.fcm.onTokenRefresh().subscribe(token => {
      this.token = token;
      Storage.set({key: 'fcm_token', value: token });
    });

    this.init();
  }

  async init() {
    await this.fcm.subscribeToTopic('livechat');

    this.fcm.onNotification().subscribe(data => {
      if(data.wasTapped){
        console.log('Received in background');
      } else {
        console.log('Received in foreground');
      };
    });
  }

  setToken() {
    this.fcm.getToken().then(token => {
      this.token = token;
      Storage.set({key: 'fcm_token', value: token });
    });
    return this.token;
  }

  deleteToken() {
    this.fcm.unsubscribeFromTopic('livechat');
    return Storage.remove({ key: 'fcm_token' });
  }

  async getToken() {
    const { value } = await Storage.get({ key: 'fcm_token' });
    return value;
  }

  clearNotif() {
    this.fcm.clearAllNotifications();
  }

  sendNotif(id, name, content) {
    const url = 'https://fcm.googleapis.com/v1/projects/myproject-b5ae1/messages:send';
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    };
    const data = {
      message: {
          topic: 'new_messages',
          notification: {
              title: name,
              body: content
          },
          data: {
              chat_id: id
          },
          android: {
              notification: {
                  click_action: 'TOP_STORY_ACTIVITY',
                  body: 'Check out the Top Story'
              }
          },
          apns: {
              payload: {
                  aps: {
                      category: 'NEW_MESSAGE_CATEGORY'
                  }
              }
          }
      }
    };
    return this.http.post(url, data, this.httpOptions);
  }
}
