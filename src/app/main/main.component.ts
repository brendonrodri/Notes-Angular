import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductBannerComponent } from "../product-banner/product-banner.component";

@Component({
    selector: 'app-main',
    standalone: true,
    templateUrl: './main.component.html',
    styleUrl: './main.component.css',
    imports: [CommonModule, ProductBannerComponent]
})
export class MainComponent {
}
