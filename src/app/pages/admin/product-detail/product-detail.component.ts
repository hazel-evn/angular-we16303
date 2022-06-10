import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TypeProducts } from "../../../models/products";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  productDetail!: TypeProducts
  constructor(private router: ActivatedRoute) {
  }

  ngOnInit(): void {
  }

}
