import { Component, Input, OnInit } from '@angular/core';
import { TypeProducts } from 'src/app/models/products';
import { ProductService } from "../../services/product.service"
@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  // title = 'my-app';
  // myName: string = "Lộc";
  // productStatus: boolean = false;

  // onHandleClick(){
  //   console.log("clicked");
  //   this.productStatus = !this.productStatus;
  // }
  // onHandleDelete(id: number){
  //   this.productList = this.productList.filter(item => item.id !== id)
  // }
  // onHandleKeyPress(event: any){
  //   console.log(event.target.value);
  //   this.title = event.target.value
  // }

  constructor(private productService: ProductService) { }
  products: any;
  ngOnInit(): void {
    this.listProduct();
  }
  listProduct(){
    this.productService.getProduct().subscribe((data) => {
        this.products = data;
    })
  }
}
