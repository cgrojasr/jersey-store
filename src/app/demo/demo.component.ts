import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; //Importar utilizar los parametros que se envian atraves de la URL

import { Product } from '../model/product.model';
import { ProductService } from '../core/services/products/product.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  products: Product[] = [];

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
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
}
