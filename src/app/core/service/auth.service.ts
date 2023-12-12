import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '@data/schema/user';
import { environment } from '@env';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  onLogin(req: any): Observable<any> {
    // return this.http.post<User>(`${environment.apiUrl}/auth/login`, {
    //   username: req.username,
    //   password: req.password,
    // });

    if (req.username == 'user' && req.password == 'user') {
      const res: Observable<User> = of({
        username: 'user',
        password: 'user',
        token: '',
      });

      return res;
    }

    return of(null);
  }

  onLogout() {}
}
