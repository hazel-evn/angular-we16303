import { Component, Input } from '@angular/core';
import mockData from 'src/data';
import { TypeProducts } from './models/products';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  productList: TypeProducts[] = mockData;
  onHandleAdd(product: any){
    this.productList.push(product)
  }
  
}
