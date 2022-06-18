import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContentService } from 'src/app/shared/api/content.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  users = [];

  constructor(
    private router: Router,
    private contentService: ContentService
  ) {
  }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.contentService.getToken().then((token) => {
      this.contentService.getUsers(token).subscribe(
        (users) => {
          this.users = users.content;
          this.contentService.getProfile(token).subscribe(
            (profile) => {
              this.users.forEach(element => {
                if (element.email === profile.content.email) {
                  element.isYou = true;
                }
              });
            }
          );
        },
        (error) => {
          console.log('error: ', error);
          if (error.status === 401) {
            this.contentService.deleteToken();
            this.router.navigate(['/login']);
          }
        }
        );
    });
  }

  saveName(event, item) {
    this.contentService.getToken().then((token) => {
      this.contentService.manageUser(token, item.id, {name: item.name}).subscribe(
        (response) => {
          console.log('status: ', response);
        });
    });
  }

  saveEmail(event, item) {
    this.contentService.getToken().then((token) => {
      this.contentService.manageUser(token, item.id, {email: item.email}).subscribe(
        (response) => {
          console.log('status: ', response);
        });
    });
  }

  saveRole(event, item) {
    this.contentService.getToken().then((token) => {
      this.contentService.manageUser(token, item.id, {role_id: event.detail.value}).subscribe(
        (response) => {
          console.log('status: ', response);
        });
    });
  }

  backButton() {
    this.router.navigate(['tabs/setting']);
  }

  doRefresh(event) {
    this.getUsers();
    setTimeout(() => {
      event.target.complete();
    }, 2000);
  }
}
