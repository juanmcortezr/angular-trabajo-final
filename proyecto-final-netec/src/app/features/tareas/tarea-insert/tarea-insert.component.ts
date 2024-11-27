import { Component, OnInit } from '@angular/core';
import { TareaService } from '../../../core/services/tarea.service';
import { Tarea } from '../../../core/models/tarea';
import { Router } from '@angular/router'; 
import { ConfirmationService, MessageService } from 'primeng/api';


@Component({
  selector: 'app-tarea-insert',
  templateUrl: './tarea-insert.component.html',
  styleUrl: './tarea-insert.component.css',
  providers: [ConfirmationService, MessageService]

})
export class TareaInsertComponent implements OnInit{

  listTareas: Tarea[] =[];
  errorMessage: string | null = null;
  value = '';
 
  constructor(private tareaService: TareaService, private router: Router, 
              private confirmationService: ConfirmationService, private messageService: MessageService) {}

  ngOnInit() {

    
  }

  

}
