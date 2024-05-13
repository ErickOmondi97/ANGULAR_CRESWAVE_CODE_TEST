import { RouterModule, RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';

import { EditComponent } from './component/edit/edit.component';
import { MainTableComponent } from './component/main-table/main-table.component';
import { NotFoundComponent } from './component/not-found/not-found.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    EditComponent,
    MainTableComponent,
    NotFoundComponent,
    RouterModule,
    RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ANGULAR_CRESWAVE_CODE_TEST';
}
