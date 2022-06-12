import { Component, OnInit } from '@angular/core';
import { WorkService } from 'src/app/services/works.service';
import { ActivatedRoute } from '@angular/router';
import { TypeProducts } from 'src/app/models/products';
@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent implements OnInit {
  products: TypeProducts[];
  constructor(private WorkService: WorkService,
      private activate: ActivatedRoute
    ) { 
      this.products = []
    }

  ngOnInit(): void {
      this.WorkService.getProduct().subscribe(data => {
        this.products = data;
        console.log(data);
      })
  }

}
