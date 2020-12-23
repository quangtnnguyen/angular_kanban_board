import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { IProject } from 'src/app/interface/project';

export interface ProjectState extends IProject { }

function createInitialState(): ProjectState {
  return {
    name: 'A Wibu\'s project',
    url: '',
    description: '',
    selectedBoardId: '',
    boards: [],
    tasks: [],
    users: []
  };
}
@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'project' })
export class ProjectStore extends Store<ProjectState> {

  constructor() {
    super(createInitialState());
  }
}
