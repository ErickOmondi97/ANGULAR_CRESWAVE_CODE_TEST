import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../Model/Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  apiurl = 'http://localhost:3000/tasks';

  constructor(private http: HttpClient) { } // Inject HttpClient in the constructor

  GetTask(): Observable<Task> {
    return this.http.get<Task>(this.apiurl);
  }

}
