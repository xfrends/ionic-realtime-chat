import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.page.html',
  styleUrls: ['./add-contact.page.scss'],
})
export class AddContactPage implements OnInit {
  itemList = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  backButton() {
    this.router.navigate(['tabs/contact']);
  }
  contactClick(item) {
    console.log('click '+item);
  }
}
