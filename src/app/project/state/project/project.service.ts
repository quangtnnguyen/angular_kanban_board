import { Injectable } from '@angular/core';
import { ProjectStore } from './project.store';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IBoard } from 'src/app/interface/board';
import { map, tap } from 'rxjs/operators';
import { arrayAdd } from '@datorama/akita';
import { IUser } from 'src/app/interface/user';
import * as faker from 'faker';
@Injectable({ providedIn: 'root' })

export class ProjectService {
  baseUrl: string;
  constructor(private http: HttpClient, protected store: ProjectStore) {
    this.baseUrl = environment.apiUrl;
  }

  setSelectedBoardId(id: string): void {
    localStorage.setItem('selectedBoardId', id);
    this.store.update({ selectedBoardId: id });
  }

  addBoard(newBoard: IBoard): void {
    this.http.post<IBoard>(`${this.baseUrl}/boards`, newBoard)
      .pipe(tap(board => {
        this.store.update(state => {
          const boards = arrayAdd(state.boards, board);
          return {
            ...state,
            boards
          };
        });
      }))
      .subscribe();
  }

  getBoards(): void {
    this.http.get<IBoard[]>(`${this.baseUrl}/boards`)
      .pipe(tap(boards => {
        this.store.update({ boards });
      }))
      .subscribe();
  }

  addUser(newUser: IUser): void {
    this.http.post<IUser>(`${this.baseUrl}/users`, newUser)
      .pipe(tap(user => {
        this.store.update(state => {
          const users = arrayAdd(state.users, user);
          return {
            ...state,
            users
          };
        });
      }))
      .subscribe();
  }

  getUsers(): void {
    this.http.get<IUser[]>(`${this.baseUrl}/users`)
      .pipe(tap(users => {
        this.store.update({
          users: users.map(user => {
            return {
              ...user,
              avatarUrl: `${faker.image.imageUrl(48, 48, 'avatar', true)}`
            };
          })
        });
      }))
      .subscribe();
  }
}
