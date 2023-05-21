import { Component } from '@angular/core';
import { Iproduct } from 'src/app/models/iproduct';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  productList: Iproduct[] = [
    {id:1,productName:"sumsung",price:300,quantity:0},
    {id:2,productName:"Book",price:100,quantity:10},
    {id:3,productName:"Iphone",price:400,quantity:1},
    {id:4,productName:"Pen",price:40,quantity:15},

  ]
}
