import { EditProducService } from './../../shared/services/local/edit-produc.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProductsService } from 'src/app/shared/services/products.service';
import { take } from "rxjs/operators";

@Component({
  selector: 'app-gestion-page',
  templateUrl: './gestion-page.component.html',
  styleUrls: ['./gestion-page.component.scss']
})
export class GestionPageComponent implements OnInit {

  formGroupManagementPage;
  constructor(private formBuilder: FormBuilder, private productsService: ProductsService, private editProd: EditProducService) { }
  product: any = this.editProd.getProduct();
  isPrev = this.editProd.getProduct();
  ngOnInit(): void {

    if(!this.product[1]){
      this.formGroupManagementPage = this.formBuilder.group({
        name: [''],
        description: [''],
        price: [''],
        image: [''],
        stars: [''],
      });
    }else{
      this.formGroupManagementPage = this.formBuilder.group({
        name: [this.product[0].name, Validators.required],
        description: [this.product[0].description, [Validators.required, Validators.email]],
        price: [this.product[0].price, Validators.required],
        image: [this.product[0].image, Validators.required],
        stars: [this.product[0].stars],
      });
    }
  }
  addProduct(){
    this.productsService.addProduct(this.formGroupManagementPage.value).pipe(take(1)).subscribe(() => {});
  }

  ngOnDestroy():void {
    this.editProd.editProduct([], false);
  }

}
