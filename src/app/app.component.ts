import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ContentService } from './shared/api/content.service';
// import { FCM } from '@ionic-native/fcm';
import { FCM } from '@awesome-cordova-plugins/fcm/ngx';
import {
  ActionPerformed,
  PushNotificationSchema,
  PushNotifications,
  Token,
} from '@capacitor/push-notifications';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  user = {};
  constructor(
    private router: Router,
    private contentService: ContentService,
    private fcm: FCM
    ) {

    this.contentService.getToken()
    .then((data) => {
      if (data === null) {
        this.router.navigate(['/login']);
      }
    })
    .catch( () => {
      this.router.navigate(['/login']);
    });

    PushNotifications.requestPermissions().then(result => {
      if (result.receive === 'granted') {
        // Register with Apple / Google to receive push via APNS/FCM
        PushNotifications.register();
      } else {
        // Show some error
      }
    });

    PushNotifications.addListener('registration', (token: Token) => {
      alert('Push registration success, token: ' + token.value);
    });

    PushNotifications.addListener('registrationError', (error: any) => {
      alert('Error on registration: ' + JSON.stringify(error));
    });

    PushNotifications.addListener('pushNotificationReceived', (notification: PushNotificationSchema) => {
        alert('Push received: ' + JSON.stringify(notification));
      },
    );

    PushNotifications.addListener('pushNotificationActionPerformed', (notification: ActionPerformed) => {
        alert('Push action performed: ' + JSON.stringify(notification));
      },
    );

    // this.fcm.subscribeToTopic('realtime-chat');

    // this.fcm.getToken().then(token => {
    //   this.contentService.setFcmToken(token);
    // });

    // this.fcm.onNotification().subscribe(data => {
    //   if(data.wasTapped){
    //     console.log('background: ', data);
    //   } else {
    //     console.log('foreground: ', data);
    //   };
    // });

    // this.fcm.onTokenRefresh().subscribe(token => {
    //   this.contentService.setFcmToken(token);
    // });

    // this.fcm.hasPermission().then(hasPermission => {
    //   if (hasPermission) {
    //     console.log('Has permission!');
    //   }
    // });
  }
}
