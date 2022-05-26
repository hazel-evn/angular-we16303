import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

const apiUrl = "http://localhost:3001/products";
@Injectable({
    providedIn: 'root'
})
export class ProductService {
    constructor(private http: HttpClient) {}
    getProduct(){
        return this.http.get(apiUrl);
    }

    addProduct(obj: {name: string, price: number}){
        return this.http.post(apiUrl, obj)
    }
}