import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ContentService } from 'src/app/shared/api/content.service';

@Component({
  selector: 'app-all-user-list',
  templateUrl: './all-user-list.component.html',
  styleUrls: ['./all-user-list.component.scss'],
})
export class AllUserListComponent implements OnInit {
  @Input() contacts: any[];
  constructor(
    private router: Router,
    private contentService: ContentService
  ) { }

  ngOnInit() {}

  contactClick(email) {
    this.contentService.getToken().then((token) => {
      this.contentService.postContact(token, email).subscribe(
        (contact) => {
          this.router.navigate(['tabs/contact']);
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
}
