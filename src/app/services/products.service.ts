import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_API } from '../app.api';
import { Product } from '../shared/product.model';
import { ProductItem } from '../shared/product-item.model';
import 'rxjs/operators';
// import { Observable } from 'rxjs';
// import { map, retryWhen, delay, take } from 'rxjs/operators';

@Injectable()
export class ProductsService {

  constructor(private http: HttpClient) { }

  static added = new EventEmitter<string>();

  private url = '/products';

  produtoAdicionado = new EventEmitter<string>();

  listAll(): ProductItem[] {
    const products = localStorage.products;
    return products ? JSON.parse(products) : [] = [];
  }


  /**
   * Recupera e lista todos os produtos
   */
  public getProducts(): Promise<Product[]> {
    return this.http.get(URL_API + this.url)
      .toPromise()
      .then((resposta: any) => resposta);
  }

  /**
   * Recupera produto por id
   */
  public getProductById(id: number): Promise<Product> {
    const filter = '?id=';
    return this.http.get(URL_API + this.url + filter + id)
      .toPromise()
      .then((resposta: any) => {
        return resposta.shift();
      });
  }

  /**
   * Adiciona produto no carrinho de compra
   */
  addItem(product: Product): void {
    const products = this.listAll();
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
     */
    const itemCarrinhoEncontrado = products.find((item: ProductItem) => item.id === itemBag.id);
    if (itemCarrinhoEncontrado) {
      itemCarrinhoEncontrado.amount += 1;
    } else {
      products.push(itemBag);
    }
    localStorage.products = JSON.stringify(products);
    ProductsService.added.emit();

  }

}
