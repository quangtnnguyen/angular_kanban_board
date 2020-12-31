import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ITask } from 'src/app/interface/task';
import { BoardStore, BoardState } from './board.store';

@Injectable({ providedIn: 'root' })
export class BoardQuery extends Query<BoardState> {
  tasks$ = this.select('tasks');
  isLoading$ = this.selectLoading();

  taskByStatus$ = (status: string): Observable<ITask[]> => {
    return this.tasks$.pipe(
      map((tasks) => {
        return tasks
          .filter(x => x.status === status);
      })
    );
  }

  constructor(protected store: BoardStore) {
    super(store);
  }

}
