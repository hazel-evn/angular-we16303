import { Component, Input, OnInit } from '@angular/core';
import { TypeProducts } from 'src/app/models/products';
@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
title = 'my-app';
  myName: string = "Lộc";
  productStatus: boolean = false;
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
  onHandleClick(){
    console.log("clicked");
    this.productStatus = !this.productStatus;
  }
  onHandleDelete(id: number){
    this.productList = this.productList.filter(item => item.id !== id)
  }
  onHandleKeyPress(event: any){
    console.log(event.target.value);
    this.title = event.target.value
  }

  constructor() { }

  ngOnInit(): void {
  }

}
