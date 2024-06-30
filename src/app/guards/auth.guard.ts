import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean {
    const isAuthenticated = this.checkIfAuthenticated();
    if (!isAuthenticated) {
      this.router.navigate(['/login']);
    }
    return isAuthenticated;
  }

  private checkIfAuthenticated(): boolean {
    // Verificar se estamos no contexto do navegador
    if (typeof window !== 'undefined' && window.localStorage) {
      // Simular autenticação verificando um token no localStorage
      return !!localStorage.getItem('authToken');
    }
    // Se não estamos no contexto do navegador, considerar como não autenticado
    return false;
  }
}
