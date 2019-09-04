import { Component, OnInit, EventEmitter } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from '../../shared/product.model';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductItem } from 'src/app/shared/product-item.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  providers: [ProductsService]

})
export class ProductComponent implements OnInit {

  public product: Product;
  public productItem: ProductItem;
  public showInfo = false;
  public selectedSize: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productsService: ProductsService,
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
   * Seleciona tamanho do produto
   */
  selectSize(event) {
    console.log(event);
    // this.productItem.size = event;
  }

  /**
   * Método para adicionar produto ao carrinho de compras
   */
  addItem(product: Product) {
    this.productsService.addItem(this.product);
    this.showInfo = true;
    setTimeout(() => {
      this.showInfo = false;
    }, 2000);
    // this.router.navigate(['/cart']);

  }



}
