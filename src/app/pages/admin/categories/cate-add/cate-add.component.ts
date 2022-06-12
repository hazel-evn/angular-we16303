import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-cate-add',
  templateUrl: './cate-add.component.html',
  styleUrls: ['./cate-add.component.css']
})
export class CateAddComponent implements OnInit {
  categories: { name: string} = {
    name: ""
  }
  constructor(private cateService: CategoriesService) { }

  ngOnInit(): void {
  }
    onSubmit(){
      this.cateService.addCategories(this.categories).subscribe(data => {
        console.log(data);
      })
    }
}
