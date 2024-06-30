import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { Product } from '../../interface/product';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    ReactiveFormsModule, 
    MatFormFieldModule, 
    MatInputModule, 
    MatButtonModule,
    MatIconModule,
    CommonModule,
    MatIconModule,
    MatRadioModule
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit{

  productForm: FormGroup;
  products: Product[] = [];

  constructor(private fb: FormBuilder, private productService: ProductService) {
    this.productForm = this.fb.group({
      code: ['', Validators.required],
      description: ['', Validators.required],
      entryDate: ['', Validators.required],
      expirationDate: ['', Validators.required]
    });
  }

  ngOnInit() {}

  loadProducts() {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
    });
  }

  onSubmit() {
    if (this.productForm.valid) {
      this.productService.addProduct(this.productForm.value).subscribe(() => {
        this.loadProducts();
        this.productForm.reset();
      });
    }
  }

}
