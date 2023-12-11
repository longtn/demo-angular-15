import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '@data/schema/user';
import { environment } from '@env';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  onLogin(loginRequest: User): Observable<User> {
    return this.http.post<User>(`${environment.apiUrl}/auth/login`, {
      username: loginRequest.username,
      password: loginRequest.password,
    });
  }

  onLogout() {
    //this.cookieService.delete('Authorization', '/');
  }
}
