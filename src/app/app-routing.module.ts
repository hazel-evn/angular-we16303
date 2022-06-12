import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogAddComponent } from './pages/admin/blogs/blog-add/blog-add.component';
import { BlogEditComponent } from './pages/admin/blogs/blog-edit/blog-edit.component';
import { BlogListComponent } from './pages/admin/blogs/blog-list/blog-page.component';
import { AdminComponent } from './layouts/admin/admin.component';
import { ClientComponent } from './layouts/client/client.component';
import { HomePageComponent } from './pages/clients/homepage/homepage.component';
import { SigninComponent } from './pages/clients/signin/signin.component';
import { SignupComponent } from './pages/clients/signup/signup.component';
import { BlogPageComponent } from './pages/clients/blog-page/blog-page.component';
import { WorksComponent } from './pages/clients/works/works.component';
import { ContactPageComponent } from './pages/clients/contact-page/contact-page.component';
import { WorkDetailComponent } from './pages/clients/works-detail/works-detail.component';
import { CateListComponent } from './pages/admin/categories/cate-list/cate-list.component';
import { UserListComponent } from './pages/admin/users/user-list/user-list.component';
import { CateAddComponent } from './pages/admin/categories/cate-add/cate-add.component';

const routes: Routes = [
  {
    path: "",
    component: ClientComponent,
    children: [
      {
        path: "",
        component: HomePageComponent
      },
      {
        path:"blog",
        component: BlogPageComponent
      },
      {
        path:"works",
        component: WorksComponent
      },
      {
        path:"contact",
        component: ContactPageComponent
      },
      {
        path:"works/:id",
        component: WorkDetailComponent
      },
      {
        path:"signin",
        component: SigninComponent
      },
      {
        path:"signup",
        component: SignupComponent
      },
    ]
  },
  {
    path: "admin",
    component: AdminComponent,
    children: [
      {
        path: "",
        component: AdminComponent
      },
      {
        path: "categories",
        component: CateListComponent
      },
      {
        path: "categories/add",
        component: CateAddComponent
      },
      {
        path: "blog",
        component: BlogListComponent
      },
      {
        path: "blog/add",
        component: BlogAddComponent
      },
       {
        path: "blog/edit/:id",
        component: BlogEditComponent
      },
      {
        path: "user",
        component: UserListComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
