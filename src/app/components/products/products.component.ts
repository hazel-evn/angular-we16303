import { Component, Input, OnInit } from '@angular/core';
import { TypeProducts } from 'src/app/models/products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  @Input("data") productList!: TypeProducts[];
  productDetail!: TypeProducts;
  constructor() { }

  ngOnInit(): void {
  }
  showDetail(id: number){
    this.productDetail = this.productList.find(item => item.id === id)!;
  }
}
