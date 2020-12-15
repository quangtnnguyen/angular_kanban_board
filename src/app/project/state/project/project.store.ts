import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { IProject } from '../../../interface/project';

export interface ProjectState extends EntityState<IProject> { }

function createInitState(): ProjectState {
  return {
    name: 'A Wibu \'s project',
    url: 'https://github.com/quangtnnguyen/angular_kanban_board',
    description: 'A JIRA clone project with Angular and Akita',
    boards: []
  } as ProjectState;
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'project' })
export class ProjectStore extends EntityStore<ProjectState> {

  constructor() {
    super(createInitState());
  }

}
