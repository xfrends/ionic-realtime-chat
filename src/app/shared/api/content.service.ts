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

  getUsers(token) {
    const url = environment.baseUrl+'/api/users';
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
}
