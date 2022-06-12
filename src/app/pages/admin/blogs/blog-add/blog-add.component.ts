import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TypeCate } from 'src/app/models/categories';
import { CategoriesService } from 'src/app/services/categories.service';
import { WorkService } from 'src/app/services/works.service';

@Component({
  selector: 'app-blog-add',
  templateUrl: './blog-add.component.html',
  styleUrls: ['./blog-add.component.css']
})
export class BlogAddComponent implements OnInit {
  cate : TypeCate[]
  blog: {name: string, image: string,catePostId: string, short_desc: string, desc: string} = {
    name: "",
    image: "",
    catePostId: "",
    short_desc: "",
    desc: ""
  }
  constructor(private WorkService: WorkService,
    private cateService: CategoriesService
    ) {
        this.cate = []
    }

  ngOnInit(): void {
    this.getCate();
  }
  getCate(){
    this.cateService.getAllCategoreis().subscribe((data) => {
      this.cate = data;
    })
  }
  onSubmit(){
    this.WorkService.addProduct(this.blog).subscribe((data) => {
      console.log(data);  
    })
  }
}
