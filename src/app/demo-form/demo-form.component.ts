import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ProductService } from '../core/services/products/product.service';

@Component({
  selector: 'app-demo-form',
  templateUrl: './demo-form.component.html',
  styleUrls: ['./demo-form.component.scss']
})
export class DemoFormComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private router: Router
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
  }

  saveData(event: Event): void {
    event.preventDefault(); //esto controla las rendiraziones despues del submit 
    if (this.form.valid) {
      const product = this.form.value;
      this.productService.addProdut(product).subscribe((response) => {
        console.log(response);
        this.router.navigate(['demo']);
      });
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
