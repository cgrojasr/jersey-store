import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; //Importar utilizar los parametros que se envian atraves de la URL

import { Product } from '../model/product.model';
import { ProductService } from '../core/services/products/product.service';
import { CartService } from '../core/services/cart/cart.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  products: Product[] = [];
  product: Product;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    //Se importa como un injeccion de dependencia
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts(): void{
    console.log('Estoy en el fetch');
    this.productService.getAllProducts().subscribe(
      productsResponse => {
        this.products = productsResponse
      }
    );
  }

  addCart(id: string): void {
    this.productService.getProductById(id).subscribe((response: Product) => {
      this.cartService.addCart(response);
    });
  }
}
