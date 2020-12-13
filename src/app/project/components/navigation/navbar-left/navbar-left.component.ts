import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-left',
  templateUrl: './navbar-left.component.html',
  styleUrls: ['./navbar-left.component.scss']
})
export class NavbarLeftComponent implements OnInit {
  items: NavItem[];
  constructor() { }

  ngOnInit(): void {
    this.items = [
      new NavItem('search', 'Search issues'),
      new NavItem('plus', 'Create issue')
    ];
  }

}

class NavItem {
  constructor(public icon: string, public tooltip: string) { }
}
