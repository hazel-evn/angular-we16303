import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TypeCate } from 'src/app/models/categories';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-cate-list',
  templateUrl: './cate-list.component.html',
  styleUrls: ['./cate-list.component.css']
})
export class CateListComponent implements OnInit {
  categories: TypeCate[]
  constructor(private http: HttpClient,
      private cateService: CategoriesService
    ) {
    this.categories = []
   }

  ngOnInit(): void {
    this.getCategories()
  }
  getCategories(){
    return this.cateService.getAllCategoreis().subscribe((data) => {
      this.categories = data
      console.log(data);
      
    })
  }
}
