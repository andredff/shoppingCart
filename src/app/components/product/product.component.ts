import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from '../../shared/product.model';
import { Router, ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { setLocalStorage, getLocalStorage } from '../../services/storage.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  providers: [ProductsService]

})
export class ProductComponent implements OnInit {

  public product: Product;
  newList: [];

  constructor(private router: Router,
              private route: ActivatedRoute,
              private productsService: ProductsService,
              private cartService: CartService,
  ) { }

  ngOnInit() {
    this.getProductId();
  }

  /**
   * Método para recuperar o produto pelo id
   */
  getProductId() {
    this.productsService.getProductById(this.route.snapshot.params.id)
      .then((product: Product) => {
        this.product = product;
      });
  }

  /**
   *
   * Método para adicionar produto ao carrinho de compras
   *
   */
  adicionarItemCarrinho(product: Product) {
    this.cartService.includeItem(this.product);
    this.router.navigate(['/cart']);
  }






}
