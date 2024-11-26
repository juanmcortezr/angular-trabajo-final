import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Tarea } from '../models/tarea';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class TareaService {

  constructor(private http:HttpClient) { }

  /*getProducts(): Observable<Tarea[]> {
    return this.http.get<Tarea[]>(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }*/

      
  getTareas(): Observable<Tarea[]> {
    return this.http.get<Tarea[]>('/assets/data/tareas.json').pipe(
      map((response: any) => response.data)
    );
  }
        
}
