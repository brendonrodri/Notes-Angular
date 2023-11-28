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
  selectedProduct?: Product;
  public router = inject(Router);

  // selectItem(selectedProductId: number){
  //   this.selectedProduct = this.products.find(
  //     (product: Product)=> product.id === selectedProductId);
  //   // console.log(this.selectedProduct);
  //   this.goToProductPage(this.selectedProduct);
  // }
  // public goToProductPage(selectedProduct?: Product):void{
  //   this.router.navigate(
  //     [`/product-page/${selectedProduct?.name}`, {queryParams: selectedProduct}])
  // }
  public goToProductPage(productId: number):void{
    this.router.navigate(
      [`/product-page/${productId}`])
  }


}
