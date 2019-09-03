import { Component, OnInit, Input } from '@angular/core';
import { ProductItem } from '../../shared/product-item.model';
import { CartService } from 'src/app/services/cart.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],

})
export class CartComponent implements OnInit {


  @Input() public itensBag: ProductItem[];

  constructor(private cartService: CartService, private storageService: StorageService) { }

  ngOnInit() {
    // localStorage.clear();
    this.itensBag = this.cartService.listAll();
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

}
