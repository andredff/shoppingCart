import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ProductItem } from '../../shared/product-item.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public itensBag: ProductItem[] = [];
  display = false;

  constructor(private cartService: CartService, private productsService: ProductsService) { }

  ngOnInit() {
    this.itensBag = this.cartService.listAll();
    ProductsService.added.subscribe(
      products => {
        this.itensBag = this.cartService.listAll();
      }
    );
    CartService.removed.subscribe(
      products => {
        this.itensBag = this.cartService.listAll();
      }
    );
  }

  showMenu() {
    this.display = !this.display;
  }

}
