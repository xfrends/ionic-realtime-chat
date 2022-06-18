import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { ContentService } from '../shared/api/content.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  appName = '';
  registerForm = {
    name: null,
    email: null,
    phone: null,
    password: null
  };
  data = {};

  constructor(
    private contentService: ContentService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.appName = environment.appName;
  }

  async onSubmit() {
    console.log(this.registerForm);
    this.contentService.postRegister(this.registerForm).subscribe((response: any) => {
      console.log(response);
      this.router.navigate(['login']);
    });
  }

}
