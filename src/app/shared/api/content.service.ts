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
      'Content-Type': 'application/x-www-form-urlencoded',
      // 'Authorization': 'Bearer ' + this.getToken
    })
  };

  constructor(private http: HttpClient) { }

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

  postLogin(data) {
    const url = environment.baseUrl+'/api/login';
    return this.http.post(url, data);
  }

  postLogout() {
    const url = environment.baseUrl+'/api/auth/logout';
    return this.http.post(url, {}, this.httpOptions);
  }
}
