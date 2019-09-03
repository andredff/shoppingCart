import { Injectable } from '@angular/core';
import { ProductItem } from '../shared/product-item.model';
import { Product } from '../shared/product.model';


@Injectable()
export class CartService {

  public itens: ProductItem[] = [];


  /**
   * Exibe lista de produtos adicionados ao carrinho
   */
  public exibirItens(): ProductItem[] {
    return this.itens;
  }

  public includeItem(product: Product) {

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
    const itemCarrinhoEncontrado = this.itens.find((item: ProductItem) => item.id === itemBag.id);
    if (itemCarrinhoEncontrado) {
      itemCarrinhoEncontrado.amount += 1;
    } else {
      this.itens.push(itemBag);
    }
  }

  /**
   * Deleta item do carrinho de compras
   *
   */
  public deleteItem(item: ProductItem) {
    console.log(item);
    this.itens.forEach((product, index) => {
      if (product.id === item.id) {
        this.itens.splice(index, 1);
      }
    });
  }

  /**
   * Calcula total do valor a ser exibido na tela de carrinho
   */
  public totalCarrinhoCompras(): number {
    let total = 0;
    this.itens.map((item: ProductItem) => {
      total = total + (item.price * item.amount);
    });
    return total;
  }

  /**
   * Incrementa a quantidade do produto já existente na tela de carrinho
   */
  public adicionarQuantidade(itemBag: ProductItem) {
    const itemCarrinhoEncontrado = this.itens.find((item: ProductItem) => item.id === itemBag.id);
    if (itemCarrinhoEncontrado) {
      itemCarrinhoEncontrado.amount += 1;
    }
  }

  /**
   * Subtrai a quantidade do produto já existente na tela de carrinho
   */
  public subtrairQuantidade(itemBag: ProductItem) {
    console.log(itemBag);
    const itemCarrinhoEncontrado = this.itens.find((item: ProductItem) => item.id === itemBag.id);

    if (itemCarrinhoEncontrado) {
      itemCarrinhoEncontrado.amount -= 1;
    }
    if (itemCarrinhoEncontrado.amount === 0) {
      this.itens.splice(this.itens.indexOf(itemCarrinhoEncontrado), 1);
    }
  }



}

