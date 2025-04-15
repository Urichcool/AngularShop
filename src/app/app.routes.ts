import { Routes } from '@angular/router';
import { BaseComponent } from './components/base/base.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { BasketComponent } from './components/basket/basket.component';
import { ProductsResolver } from './services/products.resolver';

export const routes: Routes = [
  { path: '', component: BaseComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'products/:id', component: ProductDetailsComponent, resolve:{data: ProductsResolver} },
  { path: 'basket', component: BasketComponent },

  { path: '**', redirectTo: '', component: BaseComponent },
];
