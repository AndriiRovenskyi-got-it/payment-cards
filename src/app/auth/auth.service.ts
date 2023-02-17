import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginRequest } from './models/login-request';
import { LoginResponse } from './models/login-response';
import { Observable, tap } from 'rxjs';
import { LocalstorageService } from '../services/localstorage.service';
import { HTTP_URL } from '../services/gateway.service';

const AUTH_API = 'https://ca4n5do87vb.legrandmat.com';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  loginUrl = 'https://ca4n5do87vb.legrandmat.com/account/login/';
  refreshTokenUrl = 'https://ca4n5do87vb.legrandmat.com/tokens/refresh/';

  constructor(
    private jwtHelper: JwtHelperService,
    private http: HttpClient,
    private localStorage: LocalstorageService
  ) {}

  login(loginRequest: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${HTTP_URL}/account/login/`, {
      username: loginRequest.username,
      password: loginRequest.password,
    });
  }

  refreshToken() {
    const refreshToken = this.localStorage.getValue('refresh');
    return this.http
      .post<LoginResponse>(
        `${HTTP_URL}/tokens/refresh/`,
        {
          refresh: refreshToken,
        },
        httpOptions
      )
      .pipe(
        tap((token) => {
          this.localStorage.setValue('access', token.access);
        })
      );
  }
}
