import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from  '@angular/router';

import { TextoColorPipe } from '../../../core/pipes/TextoColorPipe';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string | null = null;
 
  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(10)]]
    });
  }
 
  async onSubmit() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      try {
        const token = await this.authService.login(email, password);
        localStorage.setItem('token', token || '');
        //alert("logueo exitoso");
        console.log('Inicio de sesión exitoso. Token:', token);
        this.router.navigate(['/tareaList']);
        // Redirige o realiza acciones adicionales después del inicio de sesión
      } catch (error) {
        //alert("logueo fallido");
        this.errorMessage = 'Error al iniciar sesión. Intente de nuevo.';
        console.error('Error al iniciar sesión:', error);
      }
    }
  }
}