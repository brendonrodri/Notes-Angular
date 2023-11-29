import { Component, OnInit,} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PRODUCTS, Product } from '../../products';
import { OthersProductsComponent } from "../others-products/others-products.component";

@Component({
    standalone: true,
    selector: 'app-product-page',
    templateUrl: './product-page.component.html',
    styleUrls: ['./product-page.component.css'],
    imports: [OthersProductsComponent]
})
export class ProductPageComponent implements OnInit{

productList: Product[] = PRODUCTS;
productId: number  = 0;
pageProduct?: Product;

getProductPage(selectedProductId: number):Product | undefined {
  return this.productList.find((productItem)=> productItem.id == selectedProductId);
}
constructor(private activatedRoute: ActivatedRoute){}

ngOnInit(): void {
  this.activatedRoute.params.subscribe((params)=>{
    this.productId = +params['id'];
    this.pageProduct = this.getProductPage(this.productId);
  })
  this.getProductPage(this.productId);
}

}

//o que pode ser melhorado para que essa lógica funcione e eu consiga receber o objeto via rota?


// export class ProductPageComponent implements OnInit {
//   private activatedRoute = inject(ActivatedRoute);
//   product: Product = { id: 0, name: '', imageSrc: '' , price: 0, description: '' };

//   ngOnInit(): void {
//     this.activatedRoute.queryParams.subscribe(params => {
//       // Verifica se os queryParams existem e atribui ao objeto product
//       if (params) {
//         this.product = params as Product;
//       }
//     });
//     console.log(this.product)
//   }
// }
