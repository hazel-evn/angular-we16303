import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductPageComponent } from './components/product-page/product-page.component';
import { AdminComponent } from './layouts/admin/admin.component';
import { ClientComponent } from './layouts/client/client.component';

const routes: Routes = [
  // {path: "product", component: ProductPageComponent},
  // {path: "product/:id", component: ProductDetailComponent},
  {
    path: "",
    component: ClientComponent,
    children: [
      {
        path: "",
        component: ProductPageComponent
      },
      {
        path: "product",
        component: ProductPageComponent
      },
      {
        path: "product/:id",
        component: ProductDetailComponent
      }
    ]
  },
  {
    path: "admin",
    component: AdminComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
