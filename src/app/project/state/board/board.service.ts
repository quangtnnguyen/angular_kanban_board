import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BoardStore } from './board.store';
import { environment } from 'src/environments/environment';
import { ITask } from 'src/app/interface/task';
import { tap } from 'rxjs/operators';
import { arrayAdd, arrayUpdate } from '@datorama/akita';

@Injectable({ providedIn: 'root' })
export class BoardService {
  baseUrl: string;

  getTask(): void {
    this.http.get<ITask[]>(`${this.baseUrl}/tasks`, { params: { boardId: localStorage.getItem('selectedBoardId') } })
      .pipe(tap(tasks => {
        this.store.update({ tasks });
      }))
      .subscribe();
  }

  addTask(newTask: ITask): void {
    this.http.post<ITask>(`${this.baseUrl}/tasks`, newTask)
      .pipe(tap(task => {
        this.store.update(state => {
          const tasks = arrayAdd(state.tasks, task);
          return {
            ...state,
            tasks
          };
        });
      }))
      .subscribe();
  }

  updateTask(task: ITask): void {
    this.http.put<ITask>(`${this.baseUrl}/tasks/${task._id}`, { status: task.status, joined: task.joined })
      .pipe(tap(_ => {
        this.store.update(state => {
          const tasks = arrayUpdate(state.tasks, task._id, task);
          return {
            ...state,
            tasks
          };
        });
      }))
      .subscribe();
  }

  constructor(private http: HttpClient, protected store: BoardStore) {
    this.baseUrl = environment.apiUrl;
  }
}
