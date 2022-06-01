import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ContentService } from '../shared/api/content.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  settingForm = {
    email: '',
    name: '',
    status: true,
  };
  constructor(
    private contentService: ContentService,
    private router: Router
  ) {}

  editProfile() {
    console.log('ganti gambar');
  }

  statusChange(event) {
    console.log(this.settingForm.status);
  }

  saveName(event) {
    console.log(this.settingForm.name);
  }

  saveEmail(event) {
    console.log(this.settingForm.email);
  }

  logout() {
    this.contentService.getToken().then((token) => {
      this.contentService.postLogout(token).subscribe(
        (response) => {
          this.contentService.deleteToken();
          console.log('Success & delete token');
        },
        (error) => {
          this.contentService.deleteToken();
          console.log('Unauthorization & delete token');
        }
        );
    });
    this.router.navigate(['/login']);
  }
}
