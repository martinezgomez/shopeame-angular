import { EditProducService } from './../../services/local/edit-produc.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faLeaf } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product;
  @Input() isPrev;
  @Output() deleteClickEmitter = new EventEmitter();

  edited = true;
  constructor(private editProd: EditProducService) { }

  ngOnInit(): void {
  }

  editarProduct(prod){
    this.editProd.editProduct(prod, this.edited);
  }

  deleteProduct(idProduct){
    this.deleteClickEmitter.emit(idProduct);
  }

}

