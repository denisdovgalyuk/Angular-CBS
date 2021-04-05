import {Component, Output, EventEmitter, ViewChild} from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.sass']
})
export class AddProductComponent {

  @Output() addProduct = new EventEmitter<any>();
  @ViewChild('form') addProductFormGroup;
  newProduct = {name: '', price: '', category: ''};

  constructor() { }

  add() {
    this.addProduct.emit(this.newProduct);
    this.addProductFormGroup.form.reset();
  }

}
