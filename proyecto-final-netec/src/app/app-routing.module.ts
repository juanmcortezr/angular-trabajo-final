import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TareaListComponent } from './features/tareas/tarea-list/tarea-list.component';

const routes: Routes = [

  {
    path:'tareaList',
    component:TareaListComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

  
}
