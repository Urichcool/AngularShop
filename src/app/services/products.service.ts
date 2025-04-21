import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IProduct } from '../interfaces/products.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  url: string = 'http://localhost:3000/products';
  basketUrl: string = 'http://localhost:3000/basket';

  http = inject(HttpClient);

  getProducts() {
    return this.http.get<IProduct[]>(this.url);
  }

  getProduct(id: string) {
    return this.http.get<IProduct>(`${this.url}/${id}`);
  }

  postProduct(product:IProduct){
    return this.http.post<IProduct>(this.url, product)
  }

  deleteProduct(id:string){
    return this.http.delete<any>(`${this.url}/${id}`)
  }

  updateProduct(product:IProduct){
    return this.http.put<IProduct>(`${this.url}/${product.id}`, product)
  }

  postProductToBasket(product: IProduct){
    return this.http.post<IProduct>(this.basketUrl, product)
  }


  getBasketProducts() {
    return this.http.get<IProduct[]>(this.basketUrl);
  }

  updateQuantity(id:string, quantity:number){
    return this.http.patch<IProduct[]>(`${this.basketUrl}/${id}`, {quantity});
  }
  
}
