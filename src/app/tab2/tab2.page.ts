import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { ContentService } from '../shared/api/content.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  contacts = [];
  empty = true;
  showButton = false;
  isOnline = false;

  constructor(
    private router: Router,
    private platform: Platform,
    private contentService: ContentService
  ) {
  }

  ngOnInit() {
    this.getContact();
    if (!this.platform.is('ios')) {
      this.showButton = true;
    }
  }

  onScroll(event) {
    if (event.detail.deltaY > 0) {
        this.showButton = true;
    } else if (event.detail.deltaY < 0 && this.platform.is('ios')) {
        this.showButton = false;
    }
  }

  getContact() {
    this.contentService.getToken().then((token) => {
      this.contentService.getContacts(token).subscribe(
        (response) => {
          this.contacts = response.content;
          if (this.contacts.length !== 0) {
            this.empty = !true;
            const today = new Date();
            this.contacts.forEach(element => {
              const last = new Date( element.other_user.updated_at);
              if (today.toDateString() === last.toDateString()) {
                element.today = true;
              }
            });
          }
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

  addContact() {
    this.router.navigate(['tabs/contact/add-contact']);
  }

  doRefresh(event) {
    this.getContact();
    setTimeout(() => {
      event.target.complete();
    }, 2000);
  }
}
