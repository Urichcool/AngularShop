import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IProduct } from '../interfaces/products.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  url: string = 'http://localhost:3000/products';

  http = inject(HttpClient);

  getProducts() {
    return this.http.get<IProduct[]>(this.url);
  }

  getProduct(id: number) {
    return this.http.get<IProduct>(`${this.url}/${id}`);
  }

  postProduct(product:IProduct){
    return this.http.post<IProduct>(this.url, product)
  }
}
