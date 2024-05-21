import { Injectable } from '@angular/core';
import { inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  httpClient=inject(HttpClient);
  products=[];
  constructor() { }

  getProducts(){
    return this.httpClient.get("https://localhost:3000/products");
  }
}
