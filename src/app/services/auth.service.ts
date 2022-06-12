import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TypeUser } from '../models/users';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
    constructor(private http: HttpClient) { }
  signUp(user:TypeUser):Observable<TypeUser>{
     return this.http.post<TypeUser>(`${environment.signup}`, user);
  }
  SignIn(user:TypeUser):Observable<TypeUser>{
    return this.http.post<TypeUser>(`${environment.signin}`, user);
  }

}
