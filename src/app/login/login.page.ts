import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { ContentService } from '../shared/api/content.service';

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
    private router: Router
  ) { }

  ngOnInit() {
    this.appName = environment.appName;
  }

  async onSubmit() {
    this.contentService.postLogin(this.loginForm).subscribe((response: any) => {
      this.contentService.setToken(response.content.access_token);

      this.router.navigate(['/']);
    });
  }

}
