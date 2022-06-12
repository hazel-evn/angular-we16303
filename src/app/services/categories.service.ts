import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TypeCate } from '../models/categories';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) { }
  addCategories(data: any){
    return this.http.post(`${environment.categories}`,data);
  }
  getAllCategoreis(): Observable<TypeCate[]>{
    return this.http.get<TypeCate[]>(`${environment.categories}`);
  }

}
