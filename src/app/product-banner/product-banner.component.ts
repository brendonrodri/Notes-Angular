import { Component } from '@angular/core';
import { CommonModule,  NgFor } from '@angular/common';

@Component({
  selector: 'app-product-banner',
  standalone: true,
  imports: [CommonModule,  NgFor],
  templateUrl: './product-banner.component.html',
  styleUrl: './product-banner.component.css'
})

export class ProductBannerComponent {
  productImagesPath = ['black.png','white.png', 'blue.png', 'pink.png'];

  showDetails(){
    alert('clicou')
  }
}
