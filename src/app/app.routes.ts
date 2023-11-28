import { Routes } from '@angular/router';
import { ProductPageComponent } from './product-page/product-page.component';
import { MainComponent } from './main/main.component';
import { ShopComponent } from './shop/shop.component';

export const routes: Routes = [
  {path: "", component: MainComponent},
  {path: 'product-page/:id', component: ProductPageComponent},
  {path: "shop", component: ShopComponent}
]

//COMO QUE EU PASSARIA O NOME DO ITEM ESPECÍFICO COMO NOME DA ROUTA?
