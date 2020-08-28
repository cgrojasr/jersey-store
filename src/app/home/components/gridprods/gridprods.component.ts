import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../../model/product.model';

import { ProductService } from '../../../core/services/products/product.service';

@Component({
  selector: 'app-gridprods',
  templateUrl: './gridprods.component.html'
})
export class GridprodsComponent implements OnInit{
  @Input() product: Product;
  @Output() clickedAdd: EventEmitter<number> = new EventEmitter();

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.fetchProduct();
  }

  // products: Product[] = this.productService.getAllProducts();
  products: Product[] = [];

  addProductToCart(): void{
    console.log('El articulo con ID: ' + this.product.id.toString() + ' se agrego al carrito');
    // this.clickedAdd.emit(this.product.id);
  }

  fetchProduct(): void{
    this.productService.getAllProducts().subscribe(
      productsResponse => {
        this.products = productsResponse
      }
    );
  }
}
