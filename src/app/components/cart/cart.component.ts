import { Component, OnInit } from '@angular/core';
import { ProductItem } from '../../shared/product-item.model';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],

})
export class CartComponent implements OnInit {

  public itensBag: ProductItem[];
  public totalOrder: number;
  public totalInstallments: number;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    // localStorage.clear();
    this.itensBag = this.cartService.listAll();
    this.total();
    ProductsService.added.subscribe(
      products => {
        this.itensBag = this.cartService.listAll();
      }
    );
  }

  /**
   *  Incrementa quantidade do produto no carrinho
   */
  public increase(product: ProductItem) {
    this.cartService.increaseItem(product);
    this.itensBag = this.cartService.listAll();
  }

  /**
   *  Subtrai quantidade do produto no carrinho
   */
  public decrease(product: ProductItem) {
    this.cartService.decreaseItem(product);
    this.itensBag = this.cartService.listAll();
  }

  /**
   * Remove produto da lista do carrinho
   */
  public remove(product: ProductItem) {
    this.cartService.deleteItem(product);
    this.itensBag = this.cartService.listAll();
  }

  total() {
    this.totalOrder = this.cartService.totalOrder();
    this.totalInstallments = (this.totalOrder / 10);
  }

  buy() {
    // this.itensBag = [];
    // localStorage.clear();
  }

  teste() {
    console.log('teste');
  }

}
