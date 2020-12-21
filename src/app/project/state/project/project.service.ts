import { Injectable } from '@angular/core';
import { ProjectStore, ProjectState } from './project.store';
import { NgEntityService } from '@datorama/akita-ng-entity-service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IBoard } from 'src/app/interface/board';
import { tap } from 'rxjs/operators';
import { arrayAdd } from '@datorama/akita';

@Injectable({ providedIn: 'root' })

export class ProjectService {
  baseUrl: string;
  constructor(private http: HttpClient, protected store: ProjectStore) {
    this.baseUrl = environment.apiUrl;
  }

  addBoard(newBoard: IBoard) {
    this.http.post<IBoard>(`${this.baseUrl}/boards`, newBoard)
      .pipe(tap(board => {
        this.store.update(state => {
          const boards = arrayAdd(state.boards, board);
          return {
            ...state,
            boards
          };
        });
      })).subscribe();
  }

  getBoards() {
    return this.http.get<IBoard[]>(`${this.baseUrl}/boards`)
      .pipe(tap(boards => {
        this.store.update({ boards });
      })).subscribe();
  }
}
