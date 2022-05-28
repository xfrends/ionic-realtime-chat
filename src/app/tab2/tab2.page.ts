import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  itemList = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
  empty = true;
  showButton = false;
  isOnline = false;

  constructor(
    private router: Router,
    private platform: Platform
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
  addContact() {
    this.router.navigate(['tabs/contact/add-contact']);
  }
  contactClick(item) {
    this.router.navigate(['tabs/chat/messages']);
  }
  contactArsip(item) {
    console.log(item);
  }
}
