import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BlogListComponent } from './pages/admin/blogs/blog-list/blog-page.component';
import { BlogAddComponent } from './pages/admin/blogs/blog-add/blog-add.component';
import { AdminComponent } from './layouts/admin/admin.component';
import { ClientComponent } from './layouts/client/client.component';
import { HttpClientModule } from '@angular/common/http';
import { BlogEditComponent } from './pages/admin/blogs/blog-edit/blog-edit.component';
import { SigninComponent } from './pages/clients/signin/signin.component';
import { SignupComponent } from './pages/clients/signup/signup.component';
import { HomePageComponent } from './pages/clients/homepage/homepage.component';
import { BlogPageComponent } from './pages/clients/blog-page/blog-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { WorksComponent } from './pages/clients/works/works.component';
import { ContactPageComponent } from './pages/clients/contact-page/contact-page.component';
import { WorkDetailComponent } from './pages/clients/works-detail/works-detail.component';
import { CateListComponent } from './pages/admin/categories/cate-list/cate-list.component';
import { CateAddComponent } from './pages/admin/categories/cate-add/cate-add.component';
import { CateEditComponent } from './pages/admin/categories/cate-edit/cate-edit.component';
import { UserAddComponent } from './pages/admin/users/user-add/user-add.component';
import { UserListComponent } from './pages/admin/users/user-list/user-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BlogListComponent,
    BlogAddComponent,
    AdminComponent,
    ClientComponent,
    BlogEditComponent,
    SigninComponent,
    SignupComponent,
    HomePageComponent,
    BlogPageComponent,
    FooterComponent,
    WorksComponent,
    ContactPageComponent,
    WorkDetailComponent,
    CateListComponent,
    CateAddComponent,
    CateEditComponent,
    UserAddComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
