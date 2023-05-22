import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { ContentComponent } from './components/content/content.component';
import { TestComponent } from './components/test/test.component';
import { TodoComponent } from './components/todo/todo.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { RegisterComponent } from "./components/register/RegisterComponent";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ContentComponent,
    TestComponent,
    TodoComponent,
    ProductsComponent,
    ProductItemComponent,
    RegisterComponent
  ],
  imports: [
FormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
