import { Component, OnInit  } from '@angular/core';
import { Task } from './task.model';
import { MatTableModule } from '@angular/material/table';
import { Output, EventEmitter } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MockTaskService } from '../../task.mock.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [
    MatTableModule,
    MatIconModule
  ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})

export class TasksComponent implements OnInit {
  constructor(private mockTaskService: MockTaskService){  }
  ngOnInit() {
    // Code to execute when the component is initialized
  }

  tasks: Task[] = [
    { id: 1, title: 'Task 1', description: 'This is the first task', status: false },
  ];

  @Output() editTask = new EventEmitter<Task>();
  onEditTask(task: Task) {
    this.editTask.emit(task); // Emit event with selected task data
  }

  displayedColumns: string[] = ['id', 'title', 'description', 'status', 'actions'];

  deleteTask(task: Task) {
    // Confirmation logic (optional)
    if (confirm(`Are you sure you want to delete task "${task.title}"?`)) {
      this.mockTaskService.deleteTask(task.id) // Call service's deleteTask method
        .subscribe(response => {
          // Handle successful deletion response
          this.tasks = this.tasks.filter(t => t.id !== task.id); // Remove from local array
          console.log('Task deleted successfully:', task.id);
        }, error => {
          // Handle deletion error (optional)
          console.error('Error deleting task:', error);
        });
    }
  }


}
