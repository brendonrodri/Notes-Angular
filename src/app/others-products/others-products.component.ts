import { Component, inject } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { PRODUCTS, Product } from '../../products';
import { Router } from '@angular/router';

@Component({
  selector: 'app-others-products',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './others-products.component.html',
  styleUrl: './others-products.component.css'
})
export class OthersProductsComponent {
  products = PRODUCTS;
  public router = inject(Router);

  public goToProductPage(product: Product):void{
    this.router.navigate(
      ([`/product-page/${product.name}`, {queryParams: product}]))
  }

}
