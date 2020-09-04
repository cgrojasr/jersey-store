import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Product } from '../model/product.model';

import { CartService } from '../core/services/cart/cart.service';

@Component({
  selector: 'app-demo-cart',
  templateUrl: './demo-cart.component.html',
  styleUrls: ['./demo-cart.component.scss']
})
export class DemoCartComponent implements OnInit {

  products$: Observable<Product[]>;

  constructor(
    private cartService: CartService
  ) {
    this.products$ = this.cartService.cart$;
   }

  ngOnInit(): void {
  }

}
