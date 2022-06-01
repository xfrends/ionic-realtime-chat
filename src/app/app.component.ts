import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { ContentService } from './shared/api/content.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  user = {};
  constructor(
    private router: Router,
    private contentService: ContentService,
    private platform: Platform
    ) {
    this.contentService.getToken()
    .then((data) => {
      if (data === null) {
        this.router.navigate(['/login']);
      }
    })
    .catch( () => {
      this.router.navigate(['/login']);
    });
  }
}
