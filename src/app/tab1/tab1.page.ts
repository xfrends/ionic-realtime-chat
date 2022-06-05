import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { ContentService } from '../shared/api/content.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  empty = true;
  showButton = false;
  newMessage = false;
  chats = [];

  constructor(
    private platform: Platform,
    private router: Router,
    private contentService: ContentService
  ) {
    this.getChats();
    if (!this.platform.is('ios')) {
      this.showButton = true;
    }
  }
  getChats() {
    this.contentService.getToken().then((token) => {
      this.contentService.getChats(token).subscribe(
        (response) => {
          this.chats = response.content;
          if (this.chats.length !== 0) {
            this.empty = !true;
            const today = new Date();
            this.chats.forEach(element => {
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
  openChat(chatId) {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        id: chatId
      }
    };
    this.router.navigate(['tabs/chat/messages'], navigationExtras);
  }
  deleteChat(item) {
    console.log('delete chat');
  }
  unread(item) {
    console.log('unread chat');
  }
  doRefresh(event) {
    this.getChats();
    setTimeout(() => {
      event.target.complete();
    }, 2000);
  }
}
