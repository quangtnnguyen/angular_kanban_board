import { Injectable } from '@angular/core';
import { ProjectStore } from './project.store';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IBoard } from 'src/app/interface/board';
import { delay, tap } from 'rxjs/operators';
import { arrayAdd, setLoading } from '@datorama/akita';
import { IUser } from 'src/app/interface/user';
import * as faker from 'faker';
import { Observable } from 'rxjs';
@Injectable({ providedIn: 'root' })
export class ProjectService {
  baseUrl: string;
  constructor(private http: HttpClient, protected store: ProjectStore) {
    this.baseUrl = environment.apiUrl;
  }

  setLoading(isLoading: boolean): void {
    this.store.setLoading(isLoading);
  }

  setSelectedBoardId(id: string): void {
    localStorage.setItem('selectedBoardId', id);
    this.store.update({ selectedBoardId: id });
  }

  addBoard(newBoard: IBoard): Observable<IBoard> {
    return this.http.post<IBoard>(`${this.baseUrl}/boards`, newBoard).pipe(
      tap((board) => {
        this.store.update((state) => {
          const boards = arrayAdd(state.boards, board);
          return {
            ...state,
            boards,
          };
        });
      })
    );
  }

  getBoards(): Observable<IBoard[]> {
    return this.http.get<IBoard[]>(`${this.baseUrl}/boards`).pipe(
      delay(400),
      setLoading(this.store),
      tap((boards) => {
        this.store.update({ boards });
      })
    );
  }

  addUser(newUser: IUser): Observable<IUser> {
    return this.http.post<IUser>(`${this.baseUrl}/users`, newUser).pipe(
      tap((user) => {
        this.store.update((state) => {
          const users = arrayAdd(state.users, user);
          return {
            ...state,
            users,
          };
        });
      })
    );
  }

  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(`${this.baseUrl}/users`).pipe(
      delay(400),
      setLoading(this.store),
      tap((users) => {
        this.store.update({
          users: users.map((user) => {
            return {
              ...user,
              avatarUrl: `${faker.image.imageUrl(32, 32, 'avatar', true)}`,
            };
          }),
        });
      })
    );
  }
}
