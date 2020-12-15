import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { ProjectStore, ProjectState } from './project.store';

@Injectable({ providedIn: 'root' })
export class ProjectQuery extends QueryEntity<ProjectState> {

  constructor(protected store: ProjectStore) {
    super(store);
  }

  all$ = this.select();
  isLoading$ = this.selectLoading();
  // tasks$ = this.select('tasks');
  // users$ = this.select('users');
}
