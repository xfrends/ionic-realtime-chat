import { Component, Input, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ContentService } from 'src/app/shared/api/content.service';

@Component({
  selector: 'app-all-contact-list',
  templateUrl: './all-contact-list.component.html',
  styleUrls: ['./all-contact-list.component.scss'],
})
export class AllContactListComponent implements OnInit {
  @Input() contacts: any[];
  @Input() isOnline: boolean;
  constructor(
    private contentService: ContentService,
    private router: Router
  ) { }

  ngOnInit() {}

  contactClick(email) {
    this.contentService.getToken().then((token) => {
      this.contentService.postChat(token, email).subscribe((response: any) => {
        const navigationExtras: NavigationExtras = {
          queryParams: {
            id: response.content.id
          }
        };
        this.router.navigate(['tabs/chat/messages'], navigationExtras);
      });
    });
  }

  contactArsip(item) {
    console.log(item);
  }

}
