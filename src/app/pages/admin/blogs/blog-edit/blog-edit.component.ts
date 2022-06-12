import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TypeProducts } from 'src/app/models/products';
import { WorkService } from 'src/app/services/works.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.css']
})
export class BlogEditComponent implements OnInit {
  product: TypeProducts[];
  constructor( 
    private route: ActivatedRoute,
    private productService: WorkService
    ) { 
      this.product = []
    }

  ngOnInit(): void {
    this.getOneProduct();
  }
  getOneProduct(){
    const id = this.route.snapshot.params["_id"];
    if(id){
      this.productService.getProduct().subscribe((data)=> {
        this.product = data
        console.log(data);
      })
    }
  }
  onSubmit(){
    // this.productService.updateProduct().subscribe(data => {
    //   console.log(data);
    // })
  }

}
