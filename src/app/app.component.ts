import { Component, ViewEncapsulation } from '@angular/core';
import { ProjectQuery } from './project/state/project/project.query';
import { ProjectService } from './project/state/project/project.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'kanban-board';
  constructor(public projectQuery: ProjectQuery, public projectService: ProjectService) {
    this.projectService.setLoading(true);
  }
}
