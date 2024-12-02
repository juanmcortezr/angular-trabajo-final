import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TareaListComponent } from './features/tareas/tarea-list/tarea-list.component';

import { TareaInsertComponent } from './features/tareas/tarea-insert/tarea-insert.component';
import { TareaUpdateComponent } from './features/tareas/tarea-update/tarea-update.component';

import { HomeComponent } from './shared/components/home/home.component';

import { Router } from '@angular/router';

import { AuthGuard } from './core/guardians/auth.guard';

import { LoginComponent } from './shared/components/login/login.component';
//import { LogoutComponent } from './shared/components/logout/logout.component';

const routes: Routes = [

  {
    path:'home',
    component:HomeComponent,
    //canActivate:[AuthGuard],
    
  },
  {
    path:'login',
    component:LoginComponent,
    pathMatch:'full'
  }, 

  {
    path:'tareaList',
    component:TareaListComponent,
    canActivate:[AuthGuard],
  },
  {
    path:'agregarTarea',
    component:TareaInsertComponent,
    canActivate:[AuthGuard],
  },
  {
    path:'editarTarea',
    component:TareaUpdateComponent,
    canActivate:[AuthGuard],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
