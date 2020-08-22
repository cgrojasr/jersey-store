import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../model/product.model';

@Component({
  selector: 'app-gridprods',
  templateUrl: './gridprods.component.html'
})
export class GridprodsComponent {
  @Input() product: Product;
  @Output() clickedAdd: EventEmitter<number> = new EventEmitter();

  constructor() { }

  addProductToCart(){
    console.log('El articulo con ID: ' + this.product.id.toString() + ' se agrego al carrito');
    this.clickedAdd.emit(this.product.id);
  }
}