import { Routes } from '@angular/router';
import { ProductPageComponent } from './product-page/product-page.component';

export const routes: Routes = [
  {path: 'product-page/:product', component: ProductPageComponent}
]

//COMO QUE EU PASSARIA O NOME DO ITEM ESPECÍFICO COMO NOME DA ROUTA?
