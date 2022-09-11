import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
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
  ){
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        if (e.url !== '/register') {
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
    });
  }
}
