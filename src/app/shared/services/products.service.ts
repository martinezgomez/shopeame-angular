import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getProducts(){
    return this.http.get('http://localhost:3000/products/');
  }

  getProduct(id){
    return this.http.get('http://localhost:3000/products/' + id);
  }

  addProduct(product){
    return this.http.post('http://localhost:3000/products/', product);
  }

  deleteProduct(idProduct){
    return this.http.delete('http://localhost:3000/products/' + idProduct);
  }
}
