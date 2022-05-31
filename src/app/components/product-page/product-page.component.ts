import { Component, Input, OnInit } from '@angular/core';
import { TypeProducts } from 'src/app/models/products';
import { ProductService } from "../../services/product.service"
@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  products!: TypeProducts[];
  constructor(private productService: ProductService) { }
 
  ngOnInit(): void {
    this.listProduct();
  }
  listProduct(){
    this.productService.getProduct().subscribe((data) => {
        this.products = data;
    })
  }
  removeProduct(id: number){
      this.productService.deleteProduct(id).subscribe(() => {
         this.products = this.products.filter(item => item.id !== id)
      })
  }
}
