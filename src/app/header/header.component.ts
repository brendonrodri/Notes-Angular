import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  public router = inject(Router);

  goToPage(routeName: string):void{
    this.router.navigate(
      [`${routeName}`]
    )
  }
}
