import { Injectable } from '@angular/core';
import { Product } from '../shared/product.model';
import { ProductItem } from '../shared/product-item.model';

@Injectable()
export class StorageService {

  constructor() { }

  /**
   * Exibe lista de produtos adicionados ao carrinho
   */
  listarTodos(): ProductItem[] {
    const products = localStorage.products;
    return products ? JSON.parse(products) : [] = [];
  }

  /**
   * Adiciona produto no carrinho de compra
   */
  cadastrar(product: Product): void {
    const products = this.listarTodos();
    const itemBag: ProductItem = new ProductItem(
      product.id,
      product.img,
      product.title,
      product.description,
      product.price,
      1
    );

    /**
     * Verifica se o item adicionado já existe no carrinho se sim apenas incrementa a quantidade
     *
     */
    const itemCarrinhoEncontrado = products.find((item: ProductItem) => item.id === itemBag.id);
    if (itemCarrinhoEncontrado) {
      itemCarrinhoEncontrado.amount += 1;
    } else {
      products.push(itemBag);
    }
    localStorage.products = JSON.stringify(products);

  }

  /**
   * Incrementa a quantidade do produto já existente na tela de carrinho
   */
  adicionarQuantidade(itemBag: ProductItem) {
    const products = this.listarTodos();
    const itemCarrinhoEncontrado = products.find((item: ProductItem) => item.id === itemBag.id);
    if (itemCarrinhoEncontrado) {
      itemCarrinhoEncontrado.amount += 1;
    }
    localStorage.products = JSON.stringify(products);

  }


  /**
   * Subtrai a quantidade do produto já existente na tela de carrinho
   */
  public subtrairQuantidade(itemBag: ProductItem) {
    const products = this.listarTodos();
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
  remover(item: ProductItem): void {
    const products: ProductItem[] = this.listarTodos();
    products.forEach((product, index) => {
      if (product.id === item.id) {
        products.splice(index, 1);
        localStorage.products = JSON.stringify(products);
      }
    });
  }

  /**
   * Calcula total do valor a ser exibido na tela de carrinho
   */
  public totalCarrinhoCompras(): number {
    const products: ProductItem[] = this.listarTodos();
    let total = 0;
    products.map((item: ProductItem) => {
      total = total + (item.price * item.amount);
    });
    return total;
  }

}
