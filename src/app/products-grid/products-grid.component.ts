import { Component, Input } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { Product } from '../../products';

@Component({
  selector: 'app-products-grid',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './products-grid.component.html',
  styleUrl: './products-grid.component.css'
})
export class ProductsGridComponent  {
  @Input() productList?: Product[];
}
