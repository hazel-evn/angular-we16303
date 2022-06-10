import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TypeProducts } from 'src/app/models/products';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  product: any;
  constructor( 
    private route: ActivatedRoute,
    private productService: ProductService
    ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get("id")!;
    if(id){
      this.productService.getProduct().subscribe((data)=> {
        this.product = data
      })
    }
  }

  onSubmit(){
    
  }

}
