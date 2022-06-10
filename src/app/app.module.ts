import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductPageComponent } from './pages/admin/product-page/product-page.component';
import { ProductAddComponent } from './pages/admin/product-add/product-add.component';
import { AdminComponent } from './layouts/admin/admin.component';
import { ClientComponent } from './layouts/client/client.component';
import { ProductDetailComponent } from './pages/admin/product-detail/product-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductEditComponent } from './pages/admin/product-add/product-edit/product-edit.component';
import { SigninComponent } from './pages/clients/signin/signin.component';
import { SignupComponent } from './pages/clients/signup/signup.component';
import { HomePageComponent } from './pages/clients/homepage/homepage.component';
import { BlogPageComponent } from './pages/clients/blog-page/blog-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductPageComponent,
    ProductAddComponent,
    AdminComponent,
    ClientComponent,
    ProductDetailComponent,
    ProductEditComponent,
    SigninComponent,
    SignupComponent,
    HomePageComponent,
    BlogPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
