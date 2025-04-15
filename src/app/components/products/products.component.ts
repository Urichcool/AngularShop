import { Component, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardImage, MatCardModule } from '@angular/material/card';
import { ProductsService } from '../../services/products.service';
import { IProduct } from '../../interfaces/products.interface';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-products',
  imports: [
    MatCardModule,
    MatCardImage,
    MatButtonModule,
    CurrencyPipe,
    RouterLink,
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent implements OnInit {
  products!: IProduct[];
  productsService = inject(ProductsService);

  ngOnInit(): void {
    this.productsService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }
}
