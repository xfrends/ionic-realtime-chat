import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { ContentService } from '../shared/api/content.service';
// import { FcmService } from '../shared/notification/fcm.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  appName = '';
  loginForm = {
    email: '',
    password: ''
  };
  data = {};

  constructor(
    private contentService: ContentService,
    private router: Router,
    // private fcm: FcmService
  ) { }

  ngOnInit() {
    this.appName = environment.appName;
  }

  async onSubmit() {
    this.contentService.postLogin(this.loginForm).subscribe((response: any) => {
      console.log(this.loginForm, response.content);
      this.contentService.setEmail(response.content.email);
      this.contentService.setToken(response.content.access_token);
      // this.fcm.setToken();
      this.router.navigate(['/']);
    });
  }

  register() {
    this.router.navigate(['/register']);
  }
}
