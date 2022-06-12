/* eslint-disable quote-props */
/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import { Storage } from '@capacitor/storage';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    })
  };

  constructor(private http: HttpClient, ) { }

  // Start Token
  setToken(data) {
    return Storage.set({key: 'token', value: data });
  }
  deleteToken() {
    return Storage.remove({ key: 'token' });
  }
  async getToken() {
    const { value } = await Storage.get({ key: 'token' });
    return value;
  }
  // End Token

  // Start Auth
  getProfile(token) {
    const url = environment.baseUrl+'/api/auth/profile';
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Bearer '+token
      })
    };
    return this.http.get<any>(url, this.httpOptions);
  }
  postLogin(data) {
    const url = environment.baseUrl+'/api/login';
    return this.http.post(url, data, this.httpOptions);
  }
  postLogout(token) {
    const url = environment.baseUrl+'/api/auth/logout';
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Bearer '+token
      })
    };
    return this.http.post(url, {}, this.httpOptions);
  }
  putUser(token, id, data) {
    const url = environment.baseUrl+'/api/user/'+id;
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Bearer '+token
      })
    };
    return this.http.put(url, data, this.httpOptions);
  }
  // End Auth

  // Start User Contact
  getUsers(token) {
    const url = environment.baseUrl+'/api/user';
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Bearer '+token
      })
    };
    return this.http.get<any>(url, this.httpOptions);
  }
  postContact(token, email) {
    const url = environment.baseUrl+'/api/contact';
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Bearer '+token
      })
    };
    return this.http.post<any>(url, {email}, this.httpOptions);
  }
  getContacts(token) {
    const url = environment.baseUrl+'/api/contact';
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Bearer '+token
      })
    };
    return this.http.get<any>(url, this.httpOptions);
  }
  deleteContact(token, contactId) {
    const url = environment.baseUrl+'/api/contact/'+contactId;
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Bearer '+token
      })
    };
    return this.http.delete<any>(url, this.httpOptions);
  }
  // End User Contact

  // Start Chat
  postChat(token, email) {
    const url = environment.baseUrl+'/api/chat';
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Bearer '+token
      })
    };
    return this.http.post<any>(url, {email}, this.httpOptions);
  }
  getChats(token) {
    const url = environment.baseUrl+'/api/chat';
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Bearer '+token
      })
    };
    return this.http.get<any>(url, this.httpOptions);
  }
  getChat(token, chatId) {
    const url = environment.baseUrl+'/api/chat/'+chatId;
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Bearer '+token
      })
    };
    return this.http.get<any>(url, this.httpOptions);
  }
  deleteChat(token, chatId) {
    const url = environment.baseUrl+'/api/chat/'+chatId;
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Bearer '+token
      })
    };
    return this.http.delete<any>(url, this.httpOptions);
  }
  pinChat(token, chatId, pin) {
    const url = environment.baseUrl+'/api/chat-pin/'+chatId;
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Bearer '+token
      })
    };
    return this.http.post<any>(url, {pin}, this.httpOptions);

  }
  // End Chat

  // Start Messages
  getMessages(token, chatId) {
    const url = environment.baseUrl+'/api/message?chat_id='+chatId;
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Bearer '+token
      })
    };
    return this.http.get<any>(url, this.httpOptions);
  }
  postMessage(token, chat_id, reply, content, type, status) {
    const url = environment.baseUrl+'/api/message';
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Bearer '+token
      })
    };
    return this.http.post<any>(url, {chat_id, reply, content, type, status}, this.httpOptions);
  }
  // End Messages
}
