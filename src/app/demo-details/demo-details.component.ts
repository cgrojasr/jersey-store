import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { ProductService } from '../core/services/products/product.service';
import { Product } from '../model/product.model';

@Component({
  selector: 'app-demo-details',
  templateUrl: './demo-details.component.html',
  styleUrls: ['./demo-details.component.scss']
})
export class DemoDetailsComponent implements OnInit {
  item: Product;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      console.log(id);
      console.log(this.item);
      this.buscarporID(id);
    });
  }

  buscarporID(id: string) {
    return this.productService.getProductById(id).subscribe(
      reponse => {
        this.item = reponse;
      }
    );
  }
}
