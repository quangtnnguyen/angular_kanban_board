import { Component, Input, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { IProject } from 'src/app/interface/project';
import { SideBarLink } from 'src/app/interface/ui-model/nav-link';
import { SideBarLinks } from 'src/app/project/config/sidebar';
import { ProjectQuery } from 'src/app/project/state/project/project.query';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

@UntilDestroy()
export class SidebarComponent implements OnInit {
  @Input() expanded: boolean;
  project: IProject;

  get sidebarWidth(): number {
    return this.expanded ? 240 : 15;
  }

  sideBarLinks: SideBarLink[];

  constructor(private projectQuery: ProjectQuery) {
    this.projectQuery.all$.pipe(untilDestroyed(this)).subscribe(project => this.project = project);
  }

  ngOnInit(): void {
    this.sideBarLinks = SideBarLinks;
  }
}
