import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsGridComponent } from "../products-grid/products-grid.component";
import { PRODUCTS, Product } from '../../products';

@Component({
    selector: 'app-shop',
    standalone: true,
    templateUrl: './shop.component.html',
    styleUrl: './shop.component.css',
    imports: [CommonModule, ProductsGridComponent]
})
export class ShopComponent {
  productList: Product[] = PRODUCTS;
}
