import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContentService } from 'src/app/shared/api/content.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.page.html',
  styleUrls: ['./add-contact.page.scss'],
})
export class AddContactPage implements OnInit {
  contacts = [];
  profile = [];
  constructor(
    private router: Router,
    private contentService: ContentService
  ) {
    this.contentService.getToken().then((token) => {
      this.contentService.getUsers(token).subscribe(
        (users) => {
          this.contacts = users.content;
          this.contentService.getProfile(token).subscribe(
            (profile) => {
              this.contacts.forEach(element => {
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

  ngOnInit() {

  }

  backButton() {
    this.router.navigate(['tabs/contact']);
  }
  contactClick(email) {
    this.contentService.getToken().then((token) => {
      this.contentService.postContact(token, email).subscribe(
        (contact) => {
          this.router.navigate(['tabs/contact']);
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
}
