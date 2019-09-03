import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { ProductsService } from './services/products.service';
import { CartService } from './services/cart.service';

import { ROUTES } from './routes/app.routing';
import { PipeModule } from './pipes/pipes.module';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductComponent } from './components/product/product.component';
import { StorageService } from './services/storage.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartComponent,
    HeaderComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES),
    PipeModule.forRoot(),
  ],
  providers: [ProductsService, CartService, StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
