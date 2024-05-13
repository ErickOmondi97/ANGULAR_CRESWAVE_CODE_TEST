import { MaterialModule } from '../../../material.module';
import { TaskService } from '../../service/task.service';
import { Task } from '../../Model/Task';
import { MatInputModule } from '@angular/material/input';
import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';

import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';

import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { FormControl } from '@angular/forms';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialogActions } from '@angular/material/dialog';
import { MatDialogClose } from '@angular/material/dialog';
import { MatDialogContent } from '@angular/material/dialog';
import { MatDialogTitle } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { EditComponent } from '../edit/edit.component';


@Component({
  selector: 'main-table',
  standalone: true,
  imports: [
    MaterialModule,
    MatTableModule,
    MatFormFieldModule,
    MatButtonModule,
    NgIf,
    ReactiveFormsModule,
    MatPaginatorModule,
    RouterLink,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
  ],
  templateUrl: './main-table.component.html',
  styleUrl: './main-table.component.css'
})




export class MainTableComponent implements OnInit{
  title = 'task-management-application';
  empdata: any;
  displayedColumns: string[] = ['id', 'title', 'description', 'status', 'actions'];
  dataSource: any;
  editForm: FormGroup;
  selectedRow: any;
  showEditComponent = false;
  tasks: Task[] = [ ]


  @ViewChild(MatPaginator) paginator !: MatPaginator;


  constructor(private task: TaskService, private fb: FormBuilder, public dialog: MatDialog){
    this.editForm = this.fb.group({ // Initialize in constructor
      id: new FormControl({ value: '', disabled: true }),
      title: new FormControl(''),
      description: new FormControl(''),
      status: new FormControl(''),
    });
   }


  ngOnInit(): void {
    this.GetAll();

  }

  GetAll(){
    this.task.GetTask().subscribe(
      (result) => {
        this.empdata = result;

        this.dataSource = new MatTableDataSource<Task>(this.empdata)

        this.dataSource.paginator = this.paginator;
      }
    )
  }


  editRow(row: any) {
    /* this.selectedRow = row;
    this.editForm.setValue(row); */ // Set form values based on selected row
    this.selectedRow = row;
    this.showEditComponent = true;
  }

  saveEdit() {
    // Implement logic to save edited data (update service, etc.)
    console.log('Saving edited data:', this.editForm.value);
    this.selectedRow = null; // Clear selected row
  }

  cancelEdit() {
    this.selectedRow = null; // Clear selected row
  }

  getrow(row: any){
    console.log(row);
  }

  openDialog(){
    var dialog = this.dialog.open(EditComponent,
      {
        width: '500px',
        height: '300px',
        panelClass: 'custom-dialog-background',
        data: { title: "Mimi" }
      }
    )
    dialog
  }
}



