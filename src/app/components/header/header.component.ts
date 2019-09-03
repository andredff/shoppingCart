import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ProductItem } from '../../shared/product-item.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public itensBag: ProductItem[] = [];
  display = false;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.itensBag = this.cartService.listAll();

  }

  showMenu() {
    this.display = !this.display;
  }

}
