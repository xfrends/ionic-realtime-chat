import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  empty = true;
  showButton = false;
  newMessage = false;
  itemList = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

  constructor(
    private platform: Platform,
    private router: Router
  ) {
    if (this.itemList !== []) {
      this.empty = !true;
    }
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
  createChat() {
    this.router.navigate(['tabs/contact']);
  }
  openChat(item) {
    this.router.navigate(['tabs/chat/messages']);
  }
  deleteChat(item) {
    console.log('delete chat');
  }
  unread(item) {
    console.log('unread chat');
  }
}
