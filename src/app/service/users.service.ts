import { HttpClient } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from '../interface/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private apiUrl = 'http://localhost:3000/users';
  private http!: HttpClient;

  constructor(private injector: Injector) {}

  private getHttpClient(): HttpClient {
    if (!this.http) {
      this.http = this.injector.get(HttpClient);
    }
    return this.http;
  }

  addUser(user: Users): Observable<Users> {
    return this.getHttpClient().post<Users>(this.apiUrl, user);
  }

  getUsers(): Observable<Users[]> {
    return this.getHttpClient().get<Users[]>(this.apiUrl);
  }
}
