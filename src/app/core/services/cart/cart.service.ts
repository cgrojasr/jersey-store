import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { Product } from '../../../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private products: Product[] = [];
  private cart = new BehaviorSubject<Product[]>([]);

  cart$ = this.cart.asObservable();

  constructor() { }

  addCart(product: Product): void {
    this.products = [...this.products, product]; //... me ayuda a crear una nueva referencia del arreglo para evitar la inmutabilidad
    this.cart.next(this.products);
    console.log(this.products);
  }
}
