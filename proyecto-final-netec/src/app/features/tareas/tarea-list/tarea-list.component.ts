import { Component, OnInit } from '@angular/core';
import { TareaService } from '../../../core/services/tarea.service';
import { map } from 'rxjs/operators';
import { Tarea, Estado, Categoria } from '../../../core/models/tarea';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { TareaInsertComponent } from '../tarea-insert/tarea-insert.component';
import { TareaUpdateComponent } from '../tarea-update/tarea-update.component';

@Component({
  selector: 'app-tarea-list',
  templateUrl: './tarea-list.component.html',
  styleUrl: './tarea-list.component.css',
  providers: [ConfirmationService, MessageService, DialogService]
})
export class TareaListComponent implements OnInit {

  ref: DynamicDialogRef | undefined;

  listTareas: Tarea[] = [];
  errorMessage: string | null = null;

  constructor(
    private tareaService: TareaService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    public dialogService: DialogService) { }

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

  openEdit(tarea: Tarea) {
    this.ref = this.dialogService.open(TareaUpdateComponent, {
      data: {
        tareaSeleccionada: tarea,
        listEstado: this.listEstado,
        listCategoria: this.listCategoria
      },
      header: 'EDITAR TAREA',
      width: '40%',
      height: '75%',
      closable: false,
      styleClass: "custom-header-dialog"
    });

    this.ref.onClose.subscribe((refreshList: boolean) => {
      console.log("close modal ...", refreshList);
      if (refreshList) {
        this.retrieveTareas();
      }
    });
  }

  openNuevo() {
    this.ref = this.dialogService.open(TareaInsertComponent, {
      data: {
        listEstado: this.listEstado,
        listCategoria: this.listCategoria
      },
      header: 'REGISTRO DE TAREAS',
      width: '45%',
      height: '70%',
      closable: false,
      styleClass: "custom-header-dialog"
    });

    this.ref.onClose.subscribe((refreshList: boolean) => {
      console.log("close modal ...", refreshList);
      if (refreshList) {
        this.retrieveTareas();
      }
    });
  }

  eliminar(key: string) {
    console.log("eliminar ...", key);

    this.confirmationService.confirm({
      message: '¿Est\u00e1 seguro de eliminar la tarea?',
      header: 'Confirmaci\u00f3n',
      icon: 'pi pi-info-circle',
      acceptButtonStyleClass: "p-button-danger p-button-text",
      rejectButtonStyleClass: "p-button-text p-button-text ",
      acceptLabel: "S\u00ed",
      rejectLabel: "No",
      accept: () => {
        this.tareaService.delete(key).then(() => {
          this.retrieveTareas();
          this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'Tarea eliminada' });
        }).catch(err => console.log(err));
      },
      reject: () => { }
    });
  }

  getDescripcionEstado(code: string) {
    let description = "-";
    if (code) {
      let found = this.listEstado?.find(item => item.code === code);
      if (found){
        description = found.name;
      }
    }
    return description;
  }

  getDescripcionCategoria(code: string) {
    let description = "-";
    if (code) {
      let found = this.listCategoria?.find(item => item.codeCat === code);
      if (found){
        description = found.nameCat;
      }
    }
    return description;
  }
}
