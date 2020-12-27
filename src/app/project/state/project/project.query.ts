import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { ProjectStore, ProjectState } from './project.store';

@Injectable({ providedIn: 'root' })
export class ProjectQuery extends Query<ProjectState> {
  all$ = this.select();
  project$ = this.select('name');
  boards$ = this.select('boards');
  users$ = this.select('users');
  selectedBoardId = this.getValue().selectedBoardId;

  constructor(protected store: ProjectStore) {
    super(store);
  }
}
