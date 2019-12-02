import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url ='http://172.18.7.26:9898/product'
  
  constructor(public http:HttpClient) { }

  getProduct()
  {
   
    return this.http.get(this.url);
  }
}
