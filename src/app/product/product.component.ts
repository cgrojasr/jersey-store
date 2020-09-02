import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router'; //Tipados y Injeccion de dependencia
import { FormControl, Validators } from '@angular/forms';

import { ProductService } from '../core/services/products/product.service';
import { Product } from './../model/product.model';
import { FnParam } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  product: Product;
  descriptionField: FormControl;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {
    this.descriptionField = new FormControl(
      'Hola Mundo',
      [
        Validators.minLength(10),
        Validators.maxLength(20)
      ]
    );
    // this.descriptionField.valueChanges.subscribe(value => {
    //   console.log(value);
    // });
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      //console.log(`Estoy en el articulo con codigo ${params.id}`);
      //this.product = this.productService.getProductById(params.id);
      this.fetchProduct(id);
    }); //sucribe permite escuchar los cambios
  }

  fetchProduct(id: string) {
    this.productService.getProductById(id).subscribe(response => {
      //console.log(response);
      this.product = response;
    });
  }

  addProduct(){
    const item: Product = {
      id: 'cr4',
      description: 'Lyon Jersey 19/20',
      title: 'Lyon',
      image: 'assets/images/OL_19_20.jpg',
      price: 1299
    };
    this.productService.addProdut(item).subscribe(response => {
      console.log(response);
      this.product = response;
    });
  }

  updateProduct(id: string){
    const item: Partial<Product> = {
      price: 100
    };
    this.productService.updateProductById(this.product.id, item).subscribe(response => {
      console.log(response);
      this.product = response;
    });
  }

  saveChange() {
    if (this.descriptionField.valid) {
      console.log(this.descriptionField.value);
    }
  }
}
