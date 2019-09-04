import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/shared/product.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  public products: Product[];
  public error = false;

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.getProducts();
  }

  /**
   * Método para listar todos os produtos a serem exibidos
   */
  public getProducts() {
    this.productsService.getProducts()
      .then((products: Product[]) => {
        this.products = products;
      },
      ).catch((param: any) => {
        // console.log(param);
        this.error = true;
      });
  }


}
