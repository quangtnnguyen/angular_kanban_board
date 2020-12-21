import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
})
export class BreadcrumbsComponent implements OnInit {
  @Input() items: string[] = [];
  constructor() {}

  ngOnInit(): void {}
}
