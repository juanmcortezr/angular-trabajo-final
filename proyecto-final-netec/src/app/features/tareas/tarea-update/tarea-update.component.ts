import { Component, OnInit } from '@angular/core';
import { TareaService } from '../../../core/services/tarea.service';
import { Tarea } from '../../../core/models/tarea';
import { Router } from '@angular/router'; 
import { ConfirmationService, MessageService } from 'primeng/api';


interface estadoTarea {
  nameEstado: string;
  codEstado: string;
} 

interface categoriaTarea {
  nameCat: string;
  codCat: string;
} 

@Component({
  selector: 'app-tarea-update',
  templateUrl: './tarea-update.component.html',
  styleUrl: './tarea-update.component.css'
})
export class TareaUpdateComponent implements OnInit{
  
  listEstado: estadoTarea[] | undefined;
  listCategoria: categoriaTarea[] | undefined;

  ngOnInit() {

    this.listEstado = [
      { nameEstado: 'REGISTRADO', codEstado: 'RE' },
      { nameEstado: 'EN PROCESO', codEstado: 'EP' },
      { nameEstado: 'EJECUTADO', codEstado: 'EJ' },
    ];

    this.listCategoria = [
      { nameCat: 'PERSONAL', codCat: 'RE' },
      { nameCat: 'EDUCATIVA', codCat: 'EP' },
      { nameCat: 'LABORAL', codCat: 'EJ' },
    ];

  } 

}

