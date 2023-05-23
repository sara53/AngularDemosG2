import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: any;
  constructor(private productServices: ProductService) {}

  // test: any;
  ngOnInit(): void {
    this.productServices.getAllProducts().subscribe({
      next: (response) => {
        this.products = response;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  deleteProduct(productId: any) {
    this.productServices.deleteProduct(productId).subscribe((response) => {
      this.products = this.products.filter((item: any) => item.id != productId);
    });
  }
  // ngOnDestroy(): void {
  //   this.test.unsubscribe();
  // }
}
