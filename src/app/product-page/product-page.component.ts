import { Component, OnInit, inject } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { Product } from '../../products';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css'
})
export class ProductPageComponent implements OnInit{
  private activatedRouter = inject(ActivatedRoute)
  product!: Product;
  ngOnInit(): void {
    // this.activatedRouter.snapshot.queryParams;
    console.log(this.product);
    console.log('click')
  }
}

// COMO RECEBER OS DADOS DESSE COMPONENTE RESPEITANDO O PRINCÍPIO DA RESPONSABILIDADE ÚNICA??????
