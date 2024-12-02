import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
 
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}
 
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      //console.log("valor de localStorage: " + localStorage);
      let isAuthenticated : any = true;
      if (typeof window !== 'undefined' && window.localStorage) {
        isAuthenticated = localStorage.getItem('token');//false; // Lógica de autenticación
        
      } else {
        isAuthenticated = false;
      }
 
    if (!isAuthenticated) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}