import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router'; //Tipados y Injeccion de dependencia

import { ProductService } from './../product.service';
import { Product } from './../model/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  product: Product;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.product = this.productService.getProductById(params.id);
    }); //sucribe permite escuchar los cambios
  }

}
