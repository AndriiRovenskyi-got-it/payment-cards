import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { LocalstorageService } from '../services/localstorage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    public auth: AuthService,
    public router: Router,
    public localStorage: LocalstorageService
  ) {}
  canActivate(): boolean {
    if (!this.localStorage.getValue('access')) {
      this.router.navigate(['login']);
      alert('You are not logged in!');
      return false;
    }
    return true;
  }
}
