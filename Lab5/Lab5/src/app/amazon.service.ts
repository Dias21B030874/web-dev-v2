import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './products';

@Injectable({
  providedIn: 'root'
})
export class AmazonService {

  constructor(
    private http: HttpClient
  ) { }

  getItems(){
    let t = this.http.get<{
      id: number,
      url: string,
      name: string,
      price: number,
      description: string,
      image1: string,
      image2: string,
      image3: string,
      rating: number,
      category: string}[]>
    ('/assets/products.json');
    return t;
  }

  getProducts(){
    return this.http.get<Product[]>
    ('/assets/products.json');
  }
}
