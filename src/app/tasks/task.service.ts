import { Injectable } from '@angular/core';
import { Task } from './task.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const API_URL = 'http://localhost:3000/tasks';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor( private http: HttpClient ) {}
  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(API_URL);
  }
}
