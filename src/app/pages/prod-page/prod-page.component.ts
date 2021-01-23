import { ProductsService } from 'src/app/shared/services/products.service';
import { Component, OnInit } from '@angular/core';
import { take } from "rxjs/operators";

@Component({
  selector: 'app-prod-page',
  templateUrl: './prod-page.component.html',
  styleUrls: ['./prod-page.component.scss']
})
export class ProdPageComponent implements OnInit {

  productList = [];

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().pipe(take(1)).subscribe((products: any) => {
      this.productList = products;
    })
  }

  deleteProduct(idProduct) {
    this.productService.deleteProduct(idProduct).pipe(take(1)).subscribe(() => {
      this.getProducts();
    })
  }

}
