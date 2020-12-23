import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { ITask } from 'src/app/interface/task';

export interface BoardState {
  tasks: ITask[];
}

function createInitialState(): BoardState {
  return {
    tasks: []
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'board' })
export class BoardStore extends Store<BoardState> {

  constructor() {
    super(createInitialState());
  }

}
