import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TypeProducts } from 'src/app/models/products';
import { WorkService } from 'src/app/services/works.service';
@Component({
  selector: 'app-works-detail',
  templateUrl: './works-detail.component.html',
  styleUrls: ['./works-detail.component.css']
})
export class WorkDetailComponent implements OnInit {
  product: TypeProducts
  constructor(private WorkService: WorkService,
    private activate: ActivatedRoute
    ) {
      this.product = {
        _id: "",
        name: "",
        image: "",
        catePostId: "",
        short_desc: "",
        desc: ""
      }
    }
  ngOnInit(): void {
    const id = this.activate.snapshot.params["id"];
      this.WorkService.getOneProduct(id).subscribe(data => {
        this.product = data
      })
  }

}
