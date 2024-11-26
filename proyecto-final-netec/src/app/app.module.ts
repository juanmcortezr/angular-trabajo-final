import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './shared/components/home/home.component';
import { LoginComponent } from './shared/components/login/login.component';
import { LogoutComponent } from './shared/components/logout/logout.component';
import { TareasModule } from './features/tareas/tareas.module';
import { provideHttpClient } from '@angular/common/http';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    LogoutComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TareasModule,
    BrowserAnimationsModule,
    ConfirmDialogModule
  ],
  providers: [
    provideClientHydration(), provideHttpClient(),ConfirmationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
