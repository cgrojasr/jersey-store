import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { ProductService } from '../core/services/products/product.service';
import { Product } from '../model/product.model';

@Component({
  selector: 'app-demo-form',
  templateUrl: './demo-form.component.html',
  styleUrls: ['./demo-form.component.scss']
})
export class DemoFormComponent implements OnInit {

  form: FormGroup;
  id: string;

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((params: Params) => {
      const paramsId = params.id;
      if (paramsId) {
        this.id = paramsId;
        this.productService.getProductById(this.id).subscribe((response: Product) => {
          this.form.patchValue(response);
          // this.form.patchValue({
          //   id: response.id,
          //   description: response.description,
          //   price: response.price,
          //   title: response.title
          // });
        });
      }
    });
  }

  saveData(event: Event): void {
    event.preventDefault(); //esto controla las rendiraziones despues del submit 
    if (this.form.valid) {
      const product = this.form.value;
      if (this.id) {
        this.productService.updateProductById(this.id, product).subscribe((response) => {
          console.log(response);
          this.router.navigate(['demo']);
        });
      } else {
        this.productService.addProdut(product).subscribe((response) => {
          console.log(response);
          this.router.navigate(['demo']);
        });
      }
    }
    console.log(this.form.value);
  }

  private buildForm(): void {
    this.form = this.formBuilder.group(
      {
        id: ['', [Validators.required]],
        title: ['', [Validators.required]],
        price: [0, [Validators.required]],
        image: [''],
        description: ['', [Validators.required]]
      }
    );
  }
}
