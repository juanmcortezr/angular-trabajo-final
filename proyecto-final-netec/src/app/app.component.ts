import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  
  constructor(private config: PrimeNGConfig) {}

  ngOnInit() {
      this.config.setTranslation({
       "startsWith": "Comienza con",
        "contains": "Contiene",
        "notContains": "No contiene",
        "endsWith": "Termina con",
        "equals": "Igual",
        "notEquals": "No es igual",
        "noFilter": "Sin filtro",
        "lt": "Menos que",
        "lte": "Menor o igual que",
        "gt": "Mayor que",
        "gte": "Mayor o igual que",
        "is": "Es",
        "isNot": "No es",
        "before": "Antes",
        "after": "Después",
        "dateIs": "La fecha es",
        "dateIsNot": "La fecha no es",
        "dateBefore": "La fecha es anterior",
        "dateAfter": "La fecha es después",
        "clear": "Claro",
        "apply": "Aplicar",
        "matchAll": "Coincidir con todo",
        "matchAny": "coincidir con cualquiera",
        "addRule": "Agregar regla",
        "removeRule": "Eliminar regla",
        "accept": "Sí",
        "reject": "No",
        "choose": "Elegir",
        "upload": "Subir",
        "cancel": "Cancelar",
        "dayNames": ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
        "dayNamesShort": ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"],
        "dayNamesMin": ["Su","Mo","Tu","Nosotros","Th","Fr","Sa"],
        "monthNames": ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],
        "monthNamesShort": ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio","Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
        "dateFormat": "mm/dd/aa",
        "firstDayOfWeek": 0,
        "today": "Hoy",
        "weekHeader": "Semana",
        "weak": "Débil",
        "medium": "Medio",
        "strong": "Fuerte",
        "passwordPrompt": "Introduzca una contraseña",
        "emptyMessage": "No se han encontrado resultados",
        "emptyFilterMessage": "No se encontraron resultados"
      });
  }
}
