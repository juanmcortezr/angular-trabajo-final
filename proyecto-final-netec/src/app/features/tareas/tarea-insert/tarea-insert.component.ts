import { Component, OnInit } from '@angular/core';
import { TareaService } from '../../../core/services/tarea.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { Estado, Categoria } from '../../../core/models/tarea';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-tarea-insert',
  templateUrl: './tarea-insert.component.html',
  styleUrl: './tarea-insert.component.css',
  providers: [MessageService]

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
  private formBuilder: FormBuilder) { }

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
    this.tareaService.create(this.tareaForm.value).then(() => {
      console.log('Created new item successfully!');
      this.ref.close(true);
    });
  }

  close(){
    this.ref.close();
  }


}
