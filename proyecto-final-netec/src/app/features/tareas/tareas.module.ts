import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TareaHomeComponent } from './tarea-home/tarea-home.component';
import { TareaInsertComponent } from './tarea-insert/tarea-insert.component';
import { TareaUpdateComponent } from './tarea-update/tarea-update.component';
import { TareaDeleteComponent } from './tarea-delete/tarea-delete.component';
import { TareaListComponent } from './tarea-list/tarea-list.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';

import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { InputTextareaModule } from 'primeng/inputtextarea';

@NgModule({
  declarations: [
    TareaHomeComponent,
    TareaInsertComponent,
    TareaUpdateComponent,
    TareaDeleteComponent,
    TareaListComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    ButtonModule,
    PanelModule,
    ConfirmDialogModule,
    ToastModule,
    CalendarModule,
    DropdownModule,ToastModule,InputTextModule,CardModule,InputTextareaModule
  ],
  exports:[TareaHomeComponent, TareaInsertComponent, TareaUpdateComponent, TareaDeleteComponent, TareaListComponent, ButtonModule,InputTextModule,CardModule,InputTextareaModule,CalendarModule]
})
export class TareasModule { }
