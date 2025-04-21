import { Component, inject, OnInit } from '@angular/core';
import { IProduct } from '../../interfaces/products.interface';
import { ProductsService } from '../../services/products.service';
import { MatCardModule } from '@angular/material/card';
import { CurrencyPipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-basket',
  imports: [MatCardModule, CurrencyPipe, MatButtonModule],
  templateUrl: './basket.component.html',
  styleUrl: './basket.component.scss'
})
export class BasketComponent implements OnInit {
basket:IProduct[] = [];
productsService = inject(ProductsService)

increaseQuantity(productId:string, productQuantity:number){

this.productsService.updateQuantity(productId, productQuantity += 1).subscribe();
this.reloadPage();
}

decreaseQuantity(productId: string, productQuantity:number){
  this.productsService.updateQuantity(productId, productQuantity -= 1).subscribe();
  this.reloadPage();
}

reloadPage() {
  window.location.reload();
}

ngOnInit(): void {
  this.productsService.getBasketProducts().subscribe((data) => this.basket = data);
}

}
