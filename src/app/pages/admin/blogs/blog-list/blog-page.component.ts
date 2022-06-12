import { Component, Input, OnInit } from '@angular/core';
import { TypeProducts } from 'src/app/models/products';
import { WorkService } from "../../../../services/works.service"
@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.css']
})
export class BlogListComponent implements OnInit {
  products!: TypeProducts[];
  constructor(private productService: WorkService) { }
 
  ngOnInit(): void {
    this.listProduct();
  }
  listProduct(){
    this.productService.getProduct().subscribe((data) => {
        this.products = data;
    })
  }
  removeProduct(id: string){
      this.productService.deleteProduct(id).subscribe(() => {
         this.products = this.products.filter(item => item._id !== id)
      })
  }
}
