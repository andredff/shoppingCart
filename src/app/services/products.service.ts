import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_API } from '../app.api';
import { Product } from '../shared/product.model';
import 'rxjs/operators';

@Injectable()
export class ProductsService {

  private url = '/products';

  constructor(private http: HttpClient) { }

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

}
