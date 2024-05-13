import { MainTableComponent } from './component/main-table/main-table.component';
import { Routes } from '@angular/router';
import { NotFoundComponent } from './component/not-found/not-found.component';


export const routes: Routes = [
  {path: 'main-table', component: MainTableComponent},
  {path: '', redirectTo:'main-table', pathMatch:'full'},
  {path: '**', component: NotFoundComponent}


];
