import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl: string = "http://localhost:3000/users";
  constructor(private http: HttpClient) { }
  signUp(user: any){
     return this.http.post(`${this.apiUrl}`, user);
  }
  signIn(user: any){
    return this.http.post(`${this.apiUrl}`, user);
  }

}
