import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductBannerComponent } from "../product-banner/product-banner.component";
import { OthersProductsComponent } from "../others-products/others-products.component";
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-main',
    standalone: true,
    templateUrl: './main.component.html',
    styleUrl: './main.component.css',
    imports: [CommonModule, ProductBannerComponent, OthersProductsComponent, RouterOutlet]
})
export class MainComponent {
}
