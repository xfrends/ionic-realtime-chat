import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { ContentService } from 'src/app/shared/api/content.service';
import { PusherService } from '../shared/provider/pusher.service';
// import { FcmService } from '../shared/notification/fcm.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.page.html',
  styleUrls: ['./messages.page.scss'],
})
export class MessagesPage implements OnInit {
  email = null;
  messages = null;
  newMessage = '';
  title = '';
  chatId = null;
  empty = true;
  showButton = false;
  replyMessage = null;
  back = 'tabs/chat';
  constructor(
    private platform: Platform,
    private router: Router,
    private route: ActivatedRoute,
    private contentService: ContentService,
    private pusher: PusherService,
    // private fcm: FcmService
  ) {
    this.contentService.getEmail().then((email) => {
      this.email = email;
    });
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.chatId = params.id;
      this.getMessages(this.chatId);
    });

    const channel = this.pusher.init();
    channel.bind('new_messages', (data) => {
      if (data.id === this.chatId && data.from_email !== this.email) {
        this.getMessages(this.chatId);
      }
    });
  }

  backButton() {
    this.router.navigate([this.back]);
  }

  getChat(chatId) {
    this.contentService.getToken().then((token) => {
      this.contentService.getChat(token, chatId).subscribe(
      (chat) => {
        if (chat.length !== 0 && chat.content.type === 'group') {
          this.title = chat.content.name;
          this.back = 'tabs/group';
        }

      },
      (error) => {
        console.log('error: ', error);
        if (error.status === 401) {
          this.contentService.deleteToken();
          this.router.navigate(['/login']);
        }
      });
    });
  }
  getMessages(chatId) {
    this.contentService.getToken().then((token) => {
      this.contentService.getMessages(token, chatId).subscribe(
        (messages) => {
          this.messages = messages.content.message;
          this.title = messages.content.to.name;
          this.getChat(chatId);
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
          this.replyMessage = null;
          this.getMessages(this.chatId);
          // this.fcm.sendNotif(this.chatId, this.email, this.newMessage);
        }
      );
    });
  }
  reply(reply, id) {
    this.replyMessage = reply;
    const slidingItem = document.getElementById('slidingItem' + id) as any;
    slidingItem.close();
    document.getElementById('message-input').focus();
  }
  writing() {
    console.log('mengetik');
  }
  stopWriting() {
    console.log('stop mengetik');
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
  detail(chatId) {
    console.log(chatId);
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
