import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent implements OnInit {
  productId: any;
  product: any;
  constructor(
    private productServices: ProductService,
    private router: Router,
    private activatedRouteL: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.productId = this.activatedRouteL.snapshot.paramMap.get('id');
    if (this.productId != 0) {
      this.productServices
        .getProductById(this.productId)
        .subscribe((response) => {
          this.product = response;
          this.getProductName.setValue(this.product.productName);
          this.getPrice.setValue(this.product.price);
          this.getQuantity.setValue(this.product.quantity);
        });
    }
  }

  productForm = new FormGroup({
    productName: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
    price: new FormControl('', [Validators.min(10), Validators.required]),
    quantity: new FormControl('', [Validators.required, Validators.min(1)]),
  });

  get getProductName() {
    return this.productForm.controls['productName'];
  }

  get getPrice() {
    return this.productForm.controls['price'];
  }

  get getQuantity() {
    return this.productForm.controls['quantity'];
  }

  formOperation(e: Event) {
    e.preventDefault();
    if (this.productForm.status == 'VALID') {
      if (this.productId == 0) {
        this.productServices
          .addProduct(this.productForm.value)
          .subscribe(() => {});
      } else {
        this.productServices
          .editProduct(this.productId, this.productForm.value)
          .subscribe();
      }
      this.router.navigate(['/products']);
    }
  }
}
