import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

interface INewProduct {
  name: string,
  price: string,
  category: string
}

@Component({
  selector: 'app-add-product-data-driven',
  templateUrl: './add-product-data-driven.component.html',
  styleUrls: ['./add-product-data-driven.component.sass']
})
export class AddProductDataDrivenComponent implements OnInit {

  @Output() addProduct = new EventEmitter<any>();

  form: FormGroup;
  newProduct: INewProduct;

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(4)]),
      price: new FormControl('', [Validators.required]),
      category: new FormControl('', [Validators.required, Validators.pattern("[1-3]")])
    });
  }

  add() {
    this.newProduct = {...this.form.value};
    this.addProduct.emit(this.newProduct);
    this.form.reset();
  }

}
