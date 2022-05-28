import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.page.html',
  styleUrls: ['./messages.page.scss'],
})
export class MessagesPage implements OnInit {
  itemList = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
  newMessage = '';

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  backButton() {
    this.router.navigate(['tabs/chat']);
  }
  reply(item) {
    console.log(item);
  }
  deleteMessage(item) {
    console.log(item);
  }
  writing() {
    console.log('ngetik');
  }
  stopWriting() {
    console.log('stop ngetik');
  }
  editText() {
    console.log(this.newMessage);
    while (this.newMessage.includes('\n\n')) {
      this.newMessage = this.newMessage.replace('\n\n','\n');
    }
  }
}
