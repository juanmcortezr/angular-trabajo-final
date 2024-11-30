import { Component, OnInit } from '@angular/core';
import { TareaService } from '../../../core/services/tarea.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { Estado, Categoria } from '../../../core/models/tarea';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { Tarea } from '../../../core/models/tarea';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-tarea-update',
  templateUrl: './tarea-update.component.html',
  styleUrl: './tarea-update.component.css',
  providers: [ConfirmationService, MessageService]
})
export class TareaUpdateComponent implements OnInit {

  tareaForm!: FormGroup;
  listEstado: Estado[] | undefined;
  listCategoria: Categoria[] | undefined;
  tareaSeleccionada: Tarea = new Tarea();
  key: any;

  constructor(
    private tareaService: TareaService,
    private ref: DynamicDialogRef,
    private config: DynamicDialogConfig,
    private formBuilder: FormBuilder,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) { }

  ngOnInit() {

    let dataParent = this.config.data;
    console.log("dataParent ...", dataParent);

    this.listEstado = dataParent.listEstado;
    this.listCategoria = dataParent.listCategoria;
    this.tareaSeleccionada = dataParent.tareaSeleccionada;
    this.key = this.tareaSeleccionada.key;

    this.tareaForm = this.formBuilder.group({
      fechaIni: this.tareaSeleccionada.fechaIni,
      fechaFin: this.tareaSeleccionada.fechaFin,
      desTarea: this.tareaSeleccionada.desTarea,
      estado: this.tareaSeleccionada.estado,
      categoria: this.tareaSeleccionada.categoria
    });
  }

  saveTarea(): void {
    this.confirmationService.confirm({
      message: '¿Est\u00e1 seguro de actualizar la tarea?',
      header: 'Confirmaci\u00f3n',
      icon: 'pi pi-info-circle',
      acceptButtonStyleClass: "p-button-danger p-button-text",
      rejectButtonStyleClass: "p-button-text p-button-text ",
      acceptLabel: "S\u00ed",
      rejectLabel: "No",
      accept: () => {
        this.tareaService.update(this.key, this.tareaForm.value).then(() => {
          this.messageService.add({ severity: 'info', summary: 'Confirmaci\u00f3n', detail: 'Tarea actualizada' });
          this.ref.close(true);
        }).catch(err => console.log(err));
      },
      reject: () => { }
    });
  }

  close() {
    this.ref.close();
  }

}

