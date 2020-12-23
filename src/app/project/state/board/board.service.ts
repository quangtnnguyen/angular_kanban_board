import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BoardStore } from './board.store';
import { environment } from 'src/environments/environment';
import { ITask } from 'src/app/interface/task';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class BoardService {
  baseUrl: string;

  getTask(): void {
    this.http.get<ITask[]>(`${this.baseUrl}/tasks`, { params: { boardId: localStorage.getItem('selectedBoardId') } })
      .pipe(tap(tasks => {
        this.store.update({ tasks });
      }))
      .subscribe(res => console.log(res));
  }

  constructor(private http: HttpClient, protected store: BoardStore) {
    this.baseUrl = environment.apiUrl;
  }
}
