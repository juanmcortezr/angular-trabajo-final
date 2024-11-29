import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Tarea } from '../models/tarea';


@Injectable({
  providedIn: 'root'
})
export class TareaService {
  private dbPath = '/tareas';

  tareasRef: AngularFireList<Tarea>;

  constructor(private db: AngularFireDatabase) {
    this.tareasRef = db.list(this.dbPath);
  }

  getAll(): AngularFireList<Tarea> {
    return this.tareasRef;
  }

  create(tarea: Tarea): any {
    return this.tareasRef.push(tarea);
  }

  update(key: string, value: any): Promise<void> {
    return this.tareasRef.update(key, value);
  }

  delete(key: string): Promise<void> {
    return this.tareasRef.remove(key);
  }
        
}
