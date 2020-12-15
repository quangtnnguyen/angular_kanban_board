import { Component, Input, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { SideBarLink } from 'src/app/interface/ui-model/nav-link';
import { Project } from 'src/app/interface/ui-model/project';
import { SideBarLinks } from 'src/app/project/config/sidebar';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

@UntilDestroy()
export class SidebarComponent implements OnInit {
  @Input() expanded: boolean;
  project: Project;

  get sidebarWidth(): number {
    return this.expanded ? 240 : 15;
  }

  sideBarLinks: SideBarLink[];

  constructor() {
    this.project = new Project('Wibu neva die', '', '');
  }

  ngOnInit(): void {
    this.sideBarLinks = SideBarLinks;
  }

}
