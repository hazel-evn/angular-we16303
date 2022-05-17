import { Component, Input } from '@angular/core';
import { TypeProducts } from './models/products';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  productList: TypeProducts[] = [
    {
      id: 1,
      name: "Product A",
      price: 200,
      status: false
    },
    {
      id: 2,
      name: "Product B",
      price: 200,
      status: true
    },
  ]
  onHandleAdd(product: any){
    this.productList.push(product)
  }
  
}
