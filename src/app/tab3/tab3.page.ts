import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContentService } from '../shared/api/content.service';
import { PusherService } from '../shared/provider/pusher.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  settingForm = {
    id: null,
    email: '',
    name: '',
    avatar: '',
    status: 'aktif',
    role: null
  };
  status = false;
  constructor(
    private contentService: ContentService,
    private router: Router,
    private pusher: PusherService
  ) {
  }

  ngOnInit() {
    this.getProfile();
  }

  ionViewWillEnter() {
    this.getProfile();
  }

  getProfile() {
    this.contentService.getToken().then((token) => {
      this.contentService.getProfile(token).subscribe(
        (response) => {
          this.settingForm.id = response.content.id;
          this.settingForm.email = response.content.email;
          this.settingForm.name = response.content.name;
          this.settingForm.avatar = response.content.avatar;
          this.settingForm.status = response.content.status;
          this.settingForm.role = response.content.role_id;
          if (this.settingForm.status === 'aktif') {
            this.status = true;
          } else {
            this.status = false;
          }
        });
    });
  }
  editProfile() {
    if (this.settingForm.avatar === 'https://avataaars.io?topType=LongHairStraight') {
      this.settingForm.avatar = 'https://avataaars.io?topType=ShortHairShortWaved';
    } else {
      this.settingForm.avatar = 'https://avataaars.io?topType=LongHairStraight';
    }
    this.contentService.getToken().then((token) => {
      this.contentService.putUser(token, this.settingForm.id, {avatar: this.settingForm.avatar}).subscribe(
        (response) => {
          console.log('status: ', response);
        });
    });
  }

  statusChange(event) {
    if (this.settingForm.id != null) {
      if (this.status) {
        this.settingForm.status = 'aktif';
      } else {
        this.settingForm.status = 'nonaktif';
      }
      this.contentService.getToken().then((token) => {
        this.contentService.putUser(token, this.settingForm.id, {status: this.settingForm.status}).subscribe(
          (response) => {
            console.log('status: ', response);
          });
      });
    }
  }

  saveName(event) {
    this.contentService.getToken().then((token) => {
      this.contentService.putUser(token, this.settingForm.id, {name: this.settingForm.name}).subscribe(
        (response) => {
          console.log('status: ', response);
        });
    });
  }

  saveEmail(event) {
    this.contentService.getToken().then((token) => {
      this.contentService.putUser(token, this.settingForm.id, {email: this.settingForm.email}).subscribe(
        (response) => {
          console.log('status: ', response);
        });
    });
  }

  logout() {
    this.contentService.getToken().then((token) => {
      this.contentService.postLogout(token).subscribe(
        (response) => {
          this.pusher.unbind();
          this.contentService.deleteToken();
          console.log('Success & delete token');
        },
        (error) => {
          this.pusher.unbind();
          this.contentService.deleteToken();
          console.log('Unauthorization & delete token');
        }
        );
    });
    this.router.navigate(['/login']);
  }

  manageUsers() {
    this.router.navigate(['tabs/setting/manage-user']);
  }

  public greaterThan(subj, num) {
    return subj < num;
  }

  doRefresh(event) {
    this.getProfile();
    setTimeout(() => {
      event.target.complete();
    }, 2000);
  }
}
