import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  view = true;


  @Input() productList;
  @Output() deleteClickEmitter = new EventEmitter();


  constructor() {}

  ngOnInit(): void {
  }

  deleteProduct(idProduct){
    this.deleteClickEmitter.emit(idProduct);
  }
}
