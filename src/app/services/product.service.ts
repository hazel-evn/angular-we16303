import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { TypeProducts } from "../models/products";

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    apiUrl: string = "http://localhost:3000/products";
    constructor(private http: HttpClient) {}
    getProduct(): Observable<TypeProducts[]>{
        return this.http.get<TypeProducts[]>(`${this.apiUrl}`);
    }
    addProduct(product: any):Observable<TypeProducts[]>{
        return this.http.post<TypeProducts[]>(`${this.apiUrl}`, product)
    }
    deleteProduct(id: number):Observable<TypeProducts[]>{
        return this.http.delete<TypeProducts[]>(`${this.apiUrl}/${id}`)
    }
    updateProduct(product: any):Observable<TypeProducts[]>{
        return this.http.put<TypeProducts[]>(`${this.apiUrl}/${product.id}`, product);
    }
}