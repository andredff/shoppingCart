import { Routes } from '@angular/router';

import { HomeComponent } from '../components';
import { CartComponent } from '../components/cart/cart.component';
import { ProductComponent } from '../components/product/product.component';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cart', component: CartComponent },
  { path: 'product', component: HomeComponent },
  {
    path: ':id', component: ProductComponent,
  }
];

