import { Injectable, EventEmitter } from '@angular/core';
import { ProductItem } from '../shared/product-item.model';

@Injectable()
export class CartService {

  constructor() { }
  static removed = new EventEmitter<string>();

  public order: number;
  public installments: number;

  /**
   * Exibe lista de produtos adicionados ao carrinho
   */
  listAll(): ProductItem[] {
    const products = localStorage.products;
    return products ? JSON.parse(products) : [] = [];
  }

  /**
   * Incrementa a quantidade do produto já existente na tela de carrinho
   */
  increaseItem(itemBag: ProductItem) {
    const products = this.listAll();
    const itemCarrinhoEncontrado = products.find((item: ProductItem) => item.id === itemBag.id);
    if (itemCarrinhoEncontrado) {
      itemCarrinhoEncontrado.amount += 1;
    }
    localStorage.products = JSON.stringify(products);
  }

  /**
   * Subtrai a quantidade do produto já existente na tela de carrinho
   */
  decreaseItem(itemBag: ProductItem) {
    const products = this.listAll();
    const itemCarrinhoEncontrado = products.find((item: ProductItem) => item.id === itemBag.id);
    if (itemCarrinhoEncontrado) {
      itemCarrinhoEncontrado.amount -= 1;
    }
    if (itemCarrinhoEncontrado.amount === 0) {
      products.splice(products.indexOf(itemCarrinhoEncontrado), 1);
    }
    localStorage.products = JSON.stringify(products);
  }

  /**
   * Deleta item do carrinho de compras
   */
  deleteItem(item: ProductItem): void {
    const products: ProductItem[] = this.listAll();
    products.forEach((product, index) => {
      if (product.id === item.id) {
        products.splice(index, 1);
        localStorage.products = JSON.stringify(products);
      }
    });
    CartService.removed.emit();

  }

  /**
   * Calcula total do valor a ser exibido na tela de carrinho
   */
  totalOrder(): number {
    const products: ProductItem[] = this.listAll();
    this.order = 0;
    products.map((item: ProductItem) => {
      this.order = this.order + (item.price * item.amount);
    });
    return this.order;
  }

  totalInstallments(): number {
    this.totalOrder();
    return this.installments = (this.order / 10);
  }

}
