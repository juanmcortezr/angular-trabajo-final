import { Component, OnInit } from '@angular/core';
import { TareaService } from '../../../core/services/tarea.service';
import { Tarea } from '../../../core/models/tarea';
import { Router } from '@angular/router'; 
import { ConfirmationService, MessageService } from 'primeng/api';


interface Estado {
  name: string;
  code: string;
} 
interface Categoria {
  nameCat: string;
  codeCat: string;
} 

@Component({
  selector: 'app-tarea-list',
  templateUrl: './tarea-list.component.html',
  styleUrl: './tarea-list.component.css',
  providers: [ConfirmationService, MessageService]
})
export class TareaListComponent implements OnInit{
  
  listTareas: Tarea[] =[];
  errorMessage: string | null = null;
 
 
  constructor(private tareaService: TareaService, private router: Router, 
              private confirmationService: ConfirmationService, private messageService: MessageService) {}

  listEstado: Estado[] | undefined;
  selectedEstado: Estado | undefined;
  listCategoria: Categoria[] | undefined;
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


    this.tareaService.getTareas().subscribe({
      next: (data) => {
        console.log("tareas ...", data);
        this.listTareas = data;
      },
      error: (err) => {
        this.errorMessage = 'No se pudieron cargar las tareas.';
        console.error('Error al obtener tareas:', err);
      }
    });
  }

  openEdit(){
    
     

  }
  eliminar(event: Event){
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: '¿Estas seguro de Eliminar la Tarea?',
      header: 'Eliminar Tarea',
      icon: 'pi pi-info-circle',
      acceptButtonStyleClass:"p-button-danger p-button-text",
      rejectButtonStyleClass:"p-button-text p-button-text ",
      acceptIcon:"none",
      rejectIcon:"none",
      acceptLabel:"Si",
      rejectLabel:"No",

      accept: () => {
          this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'Record deleted' });
      },
      reject: () => {
          this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected' });
      }
  });
  }
  limpiarLista(){}
  btnBuscar(){}
  btnAgregar(){
    
  }
  
}
