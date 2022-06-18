import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Platform } from '@ionic/angular';
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
  empty = true;
  showButton = false;
  replyMessage = null;
  constructor(
    private platform: Platform,
    private router: Router,
    private route: ActivatedRoute,
    private contentService: ContentService
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.chatId = params.id;
      this.getMessages(this.chatId);
    });
  }

  backButton() {
    this.router.navigate(['tabs/chat']);
  }

  getMessages(chatId) {
    this.contentService.getToken().then((token) => {
      this.contentService.getMessages(token, chatId).subscribe(
        (messages) => {
          this.messages = messages.content.message;
          this.to = messages.content.to.name;
          if (this.messages.length !== 0) {
            this.empty = !true;
            const today = new Date();
            this.messages.forEach(element => {
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
  send() {
    this.contentService.getToken().then((token) => {
      this.contentService.postMessage(token, this.chatId, this.replyMessage, this.newMessage, 'text', 'sending').subscribe(
        () => {
          this.newMessage = '';
          this.getMessages(this.chatId);
        }
      );
    });
  }
  reply(reply) {
    this.replyMessage = reply;
    document.getElementById('message-input').focus();
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
  onScroll(event) {
    if (event.detail.deltaY > 0) {
        this.showButton = true;
    } else if (event.detail.deltaY < 0 && this.platform.is('ios')) {
        this.showButton = false;
    }
  }
  doRefresh(event) {
    this.getMessages(this.chatId);
    setTimeout(() => {
      event.target.complete();
    }, 2000);
  }

  public greaterThan(subj, num) {
    return subj < num;
  }
}
