import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BoardStore } from './board.store';
import { environment } from 'src/environments/environment';
import { ITask } from 'src/app/interface/task';
import { delay, tap } from 'rxjs/operators';
import { arrayAdd, setLoading } from '@datorama/akita';
import { ProjectStore } from '../project/project.store';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class BoardService {
  baseUrl: string;

  setLoading(isLoading: boolean): void {
    this.projectStore.setLoading(isLoading);
  }

  getTasks(): Observable<ITask[]> {
    return this.http.get<ITask[]>(`${this.baseUrl}/tasks`, { params: { boardId: localStorage.getItem('selectedBoardId') } })
      .pipe(
        delay(300),
        setLoading(this.projectStore),
        tap(tasks => {
          this.store.update({ tasks });
        })
      );
  }

  addTask(newTask: ITask): Observable<ITask> {
    return this.http.post<ITask>(`${this.baseUrl}/tasks`, newTask)
      .pipe(tap(task => {
        this.store.update(state => {
          const tasks = arrayAdd(state.tasks, task);
          return {
            ...state,
            tasks
          };
        });
      })
      );
  }

  updateTask(task: ITask): Observable<ITask> {
    return this.http.put<ITask>(`${this.baseUrl}/tasks/${task._id}`, { status: task.status, joined: task.joined });
  }

  constructor(private http: HttpClient, protected store: BoardStore, protected projectStore: ProjectStore) {
    this.baseUrl = environment.apiUrl;
  }
}
