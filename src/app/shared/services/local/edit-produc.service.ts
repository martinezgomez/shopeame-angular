import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EditProducService {

  private edited = false;
  private product = [];

  constructor() { }

    editProduct(prod, edit){
      this.product = prod;
      this.edited = edit;
    }
    getProduct(){
      return [this.product, this.edited];
    }

    borrarProduct(){
      return this.product;
    }
}
