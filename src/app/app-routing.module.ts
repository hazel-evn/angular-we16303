import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductAddComponent } from './pages/admin/product-add/product-add.component';
import { ProductDetailComponent } from './pages/admin/product-detail/product-detail.component';
import { ProductEditComponent } from './pages/admin/product-add/product-edit/product-edit.component';
import { ProductPageComponent } from './pages/admin/product-page/product-page.component';
import { AdminComponent } from './layouts/admin/admin.component';
import { ClientComponent } from './layouts/client/client.component';
import { HomePageComponent } from './pages/clients/homepage/homepage.component';
import { SigninComponent } from './pages/clients/signin/signin.component';
import { SignupComponent } from './pages/clients/signup/signup.component';

const routes: Routes = [
  // {path: "", component: HomePageComponent},
  // {path: "product", component: ProductPageComponent},
  // {path: "product/add", component: ProductAddComponent},
  // {path: "product/edit/:id", component: ProductEditComponent},
  // {path: "product/:id", component: ProductDetailComponent},
  // {path: "signin", component: SigninComponent},
  // {path: "signup", component: SignupComponent},
  {
    path: "",
    component: ClientComponent,
    children: [
      {
        path: "",
        component: HomePageComponent
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
