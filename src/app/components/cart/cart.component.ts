import { Component, OnInit } from '@angular/core';
import { ProductItem } from '../../shared/product-item.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],

})
export class CartComponent implements OnInit {

  public itensBag: ProductItem[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.itensBag = this.cartService.exibirItens();
  }

  /**
   *  Incrementa quantidade do produto no carrinho
   */
  public increase(product: ProductItem) {
    this.cartService.adicionarQuantidade(product);
  }

  /**
   *  Subtrai quantidade do produto no carrinho
   */
  public decrease(product: ProductItem) {
    this.cartService.subtrairQuantidade(product);
  }

  /**
   * Remove produto da lista do carrinho
   */
  public remove(product: ProductItem) {
    this.cartService.deleteItem(product);
  }

}
