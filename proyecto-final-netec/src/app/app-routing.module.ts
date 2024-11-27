import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TareaListComponent } from './features/tareas/tarea-list/tarea-list.component';

import { HomeComponent } from './shared/components/home/home.component';

import { Router } from '@angular/router';

import { AuthGuard } from './core/guardians/auth.guard';

import { LoginComponent } from './shared/components/login/login.component';

const routes: Routes = [

  {
    path:'home',
    component:HomeComponent,
    canActivate:[AuthGuard],
    
  },
  {
    path:'login',
    component:LoginComponent,
    pathMatch:'full'

const routes: Routes = [

  {
    path:'tareaList',
    component:TareaListComponent,
  },
  {
    path:'agregarTarea',
    component:TareaInsertComponent,
  },
  {
    path:'editarTarea',
    component:TareaUpdateComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
