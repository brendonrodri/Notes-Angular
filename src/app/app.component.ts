import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { MainComponent } from './main/main.component';
import { OthersProductsComponent } from "./others-products/others-products.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [CommonModule, RouterOutlet, HeaderComponent, MainComponent, OthersProductsComponent]
})
export class AppComponent {
  title = 'newApp';
}
