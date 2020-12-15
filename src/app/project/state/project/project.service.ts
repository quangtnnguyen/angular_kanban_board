import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProjectStore } from './project.store';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class ProjectService {
  baseUrl: string;
  constructor(private store: ProjectStore) {
    this.baseUrl = environment.apiUrl;
  }

  setLoading(isLoading: boolean): void {
    this.store.setLoading(isLoading);
  }
}
