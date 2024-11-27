import { Component } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from  '@angular/router';
 
@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent {
  constructor(private authService: AuthService, private router: Router) {}
 
  async onLogout() {
    await this.authService.logout();
    localStorage.removeItem('token'); // Elimina el token almacenado
    this.router.navigate(['/login']); // Redirige al usuario a la página de login
  }
}