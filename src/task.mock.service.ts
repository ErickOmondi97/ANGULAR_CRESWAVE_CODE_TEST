import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

// Imported Task interface
import { Task } from '../src/app/tasks/task.model';


const tasks: any[] = [
  { id: 1, title: 'Task 1', description: 'This is the first task', status: false },
  { id: 2, title: 'Task 2', description: 'This is the second task', status: true },
  { id: 3, title: 'Task 3', description: 'This is the third task', status: true },
  { id: 4, title: 'Task 4', description: 'This is the forth task', status: true },
];


@Injectable({ providedIn: 'root' })

export class MockTaskService {

  getTasks(): Observable<Task[]> {
    // Return the mock task data as Observable
    return of(tasks);
  }


  // Implementation of mock methods for addTask, updateTask, and deleteTask
  addTask(task: Task): Observable<Task> {
    // Add logic to update the mock tasks array and return the new task
    tasks.push(task);
    return of(task);
  }

  updateTask(task: Task): Observable<Task> {
    // Implement logic to update a task in the mock tasks array
    const index = tasks.findIndex(t => t.id === task.id);
    if (index > -1) {
      tasks[index] = task;
    }
    return of(task);
  }

  deleteTask(id: number): Observable<any> {

    // Implement logic to remove a task from the mock tasks array
    const index = tasks.findIndex((t: Task) => t.id === id);
    if (index > -1) {
      tasks.splice(index, 1);
    }
    return of(null); // Simulate successful deletion
  }
}
