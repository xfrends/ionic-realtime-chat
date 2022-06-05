import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContentService } from 'src/app/shared/api/content.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.page.html',
  styleUrls: ['./messages.page.scss'],
})
export class MessagesPage implements OnInit {
  messages = null;
  newMessage = '';
  to = '';
  chatId = null;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private contentService: ContentService
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.chatId = params.id;
      this.getChat(this.chatId);
    });
  }

  backButton() {
    this.router.navigate(['tabs/chat']);
  }

  getChat(chatId) {
    this.contentService.getToken().then((token) => {
      this.contentService.getChat(token, chatId).subscribe(
        (chat) => {
          this.messages = chat.content.messages;
          this.to = chat.content.to;
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
  send() {
    this.contentService.getToken().then((token) => {
      //
    });
    console.log(this.chatId, this.newMessage);
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
    // remove double enter
    // while (this.newMessage.includes('\n\n')) {
    //   this.newMessage = this.newMessage.replace('\n\n','\n');
    // }
  }
  doRefresh(event) {
    this.getChat(this.chatId);
    setTimeout(() => {
      event.target.complete();
    }, 2000);
  }
}
