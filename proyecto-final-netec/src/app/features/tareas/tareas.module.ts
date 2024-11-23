import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TareaHomeComponent } from './tarea-home/tarea-home.component';
import { TareaInsertComponent } from './tarea-insert/tarea-insert.component';
import { TareaUpdateComponent } from './tarea-update/tarea-update.component';
import { TareaDeleteComponent } from './tarea-delete/tarea-delete.component';
import { TareaListComponent } from './tarea-list/tarea-list.component';



@NgModule({
  declarations: [
    TareaHomeComponent,
    TareaInsertComponent,
    TareaUpdateComponent,
    TareaDeleteComponent,
    TareaListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TareasModule { }
