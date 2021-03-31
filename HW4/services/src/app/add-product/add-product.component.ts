import {Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.sass']
})
export class AddProductComponent {

  constructor() { }

  newProduct = {name: '', price: '', category: ''};

  @Output() addProduct = new EventEmitter<any>();

  add() {
    if (+this.newProduct.category > 3 || +this.newProduct < 0) {
      this.newProduct.category = '';
    }
    if (this.newProduct.name !== '' || this.newProduct.price !== '') {
      this.addProduct.emit(this.newProduct);
    }
  }

}
