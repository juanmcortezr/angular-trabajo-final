import { Component, OnInit } from '@angular/core';
import { TareaService } from '../../../core/services/tarea.service';
import { map } from 'rxjs/operators';
import { Tarea, Estado, Categoria } from '../../../core/models/tarea';
import { MessageService } from 'primeng/api';

import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { TareaInsertComponent } from '../tarea-insert/tarea-insert.component';
import { TareaUpdateComponent } from '../tarea-update/tarea-update.component';

@Component({
  selector: 'app-tarea-list',
  templateUrl: './tarea-list.component.html',
  styleUrl: './tarea-list.component.css',
  providers: [MessageService, DialogService]
})
export class TareaListComponent implements OnInit {

  ref: DynamicDialogRef | undefined;

  listTareas: Tarea[] = [];
  errorMessage: string | null = null;

  constructor(private tareaService: TareaService,
    private messageService: MessageService, public dialogService: DialogService) { }

  listEstado: Estado[] | undefined;
  listCategoria: Categoria[] | undefined;

  selectedEstado: Estado | undefined;
  selectedCategoria: Categoria | undefined;

  ngOnInit() {

    this.listEstado = [
      { name: 'REGISTRADO', code: 'RG' },
      { name: 'EN PROCESO', code: 'EP' },
      { name: 'EJECUTADO', code: 'EJ' },

    ];

    this.listCategoria = [
      { nameCat: 'PERSONAL', codeCat: 'PES' },
      { nameCat: 'EDUCATIVA', codeCat: 'ED' },
      { nameCat: 'LABORAL', codeCat: 'LAB' }
    ];

    this.retrieveTareas();

  }

  retrieveTareas(): void {
    this.tareaService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(data => {
      this.listTareas = data;
    });
  }

  openEdit() {
    this.ref = this.dialogService.open(TareaUpdateComponent, { header: '' });
  }

  openNuevo() {
    this.ref = this.dialogService.open(TareaInsertComponent, { 
      data: {
        listEstado: this.listEstado,
        listCategoria: this.listCategoria
      },
      header: '',
      closable: false
    });

    this.ref.onClose.subscribe((refreshList: boolean) => {
      console.log("close modal ...", refreshList);
      if (refreshList){
        this.retrieveTareas();
      }
    });
  }

  eliminar(event: Event) {
    /*this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: '¿Estas seguro de Eliminar la Tarea?',
      header: 'Eliminar Tarea',
      icon: 'pi pi-info-circle',
      acceptButtonStyleClass: "p-button-danger p-button-text",
      rejectButtonStyleClass: "p-button-text p-button-text ",
      acceptIcon: "none",
      rejectIcon: "none",
      acceptLabel: "Si",
      rejectLabel: "No",

      accept: () => {
        this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'Record deleted' });
      },
      reject: () => {
        this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected' });
      }
    })*/
  }
  limpiarLista() { }
  btnBuscar() { }
  btnAgregar() {

  }

}
