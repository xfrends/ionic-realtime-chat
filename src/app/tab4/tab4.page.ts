import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { ContentService } from '../shared/api/content.service';
import { Md5 } from 'ts-md5/dist/md5';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page implements OnInit {

  empty = true;
  showButton = false;
  newMessage = false;
  chats = [];

  constructor(
    private platform: Platform,
    private router: Router,
    private contentService: ContentService
  ) {
  }

  ngOnInit() {
    this.getChats();
    if (!this.platform.is('ios')) {
      this.showButton = true;
    }
  }

  getChats() {
    this.contentService.getToken().then((token) => {
      this.contentService.getGroups(token).subscribe(
        (response) => {
          this.chats = response.content;
          if (this.chats.length !== 0) {
            this.empty = !true;
            const today = new Date();
            this.chats.forEach(element => {
              element.gravatar = Md5.hashStr(element.name);
              const last = new Date( element.updated_at);
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
  onScroll(event) {
    if (event.detail.deltaY > 0) {
        this.showButton = true;
    } else if (event.detail.deltaY < 0 && this.platform.is('ios')) {
        this.showButton = false;
    }
  }
  createChat() {
    this.router.navigate(['tabs/contact']);
  }
  pinChat(chatId) {
    this.contentService.getToken().then((token) => {
      this.contentService.pinChat(token, chatId, true).subscribe(
        (response) => {
            this.getChats();
        });
    });
  }
  unPinChat(chatId) {
    this.contentService.getToken().then((token) => {
      this.contentService.pinChat(token, chatId, false).subscribe(
        (response) => {
            this.getChats();
        });
    });
  }
  openChat(chatId) {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        id: chatId
      }
    };
    this.router.navigate(['tabs/group/messages'], navigationExtras);
  }
  deleteChat(chatId) {
    this.contentService.getToken().then((token) => {
      this.contentService.deleteChat(token, chatId).subscribe(
        (response) => {
            this.getChats();
        });
    });
  }
  unread(chatId) {
    console.log('unread chat', chatId);
  }
  doRefresh(event) {
    this.getChats();
    setTimeout(() => {
      event.target.complete();
    }, 2000);
  }
}
