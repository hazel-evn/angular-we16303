import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { TypeProducts } from "../models/products";
import { environment } from "src/environments/environment";
@Injectable({
    providedIn: 'root'
})

export class WorkService {
    constructor(private http: HttpClient) {}
    getProduct(): Observable<TypeProducts[]>{
        return this.http.get<TypeProducts[]>(`${environment.product}`);
    }
    getOneProduct(id: string): Observable<TypeProducts>{
        return this.http.get<TypeProducts>(`${environment.product}/${id}`);
    }
    addProduct(product: any):Observable<TypeProducts[]>{
        return this.http.post<TypeProducts[]>(`${environment.product}`, product)
    }
    deleteProduct(id: string):Observable<TypeProducts[]>{
        return this.http.delete<TypeProducts[]>(`${environment.product}/${id}`)
    }
    updateProduct(product: TypeProducts):Observable<TypeProducts[]>{
        return this.http.put<TypeProducts[]>(`${environment.product}/${product._id}`, product);
    }
}