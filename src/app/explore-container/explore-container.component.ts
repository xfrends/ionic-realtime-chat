import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent implements OnInit {
  @Input() name: string;
  @Input() navigate: string;

  constructor(private router: Router) { }

  ngOnInit() {}

  redirect(navigate) {
    this.router.navigate([navigate]);
  }
}
