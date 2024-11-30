import { Component, OnInit } from '@angular/core';
import { TareaService } from '../../../core/services/tarea.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { Estado, Categoria } from '../../../core/models/tarea';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-tarea-insert',
  templateUrl: './tarea-insert.component.html',
  styleUrl: './tarea-insert.component.css',
  providers: [ConfirmationService, MessageService]

})
export class TareaInsertComponent implements OnInit {

  tareaForm!: FormGroup;
  errorMessage: string | null = null;
  listEstado: Estado[] | undefined;
  listCategoria: Categoria[] | undefined;

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

    this.tareaForm = this.formBuilder.group({
      fechaIni: '',
      fechaFin: '',
      desTarea: '',
      estado: '',
      categoria: ''
    });
  }

  saveTarea(): void {
    console.log("saveTarea ...", this.tareaForm.value);

    this.confirmationService.confirm({
      message: '¿Est\u00e1 seguro de registrar la tarea?',
      header: 'Confirmaci\u00f3n',
      icon: 'pi pi-info-circle',
      acceptButtonStyleClass: "p-button-danger p-button-text",
      rejectButtonStyleClass: "p-button-text p-button-text ",
      acceptLabel: "S\u00ed",
      rejectLabel: "No",
      accept: () => {
        this.tareaService.create(this.tareaForm.value).then(() => {
          this.messageService.add({ severity: 'info', summary: 'Confirmaci\u00f3n', detail: 'Tarea registrada' });
          this.ref.close(true);
        });
      },
      reject: () => { }
    });
  }

  close() {
    this.ref.close();
  }


}
