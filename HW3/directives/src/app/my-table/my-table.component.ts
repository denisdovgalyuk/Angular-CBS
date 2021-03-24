import {Component, Input, OnChanges, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-my-table',
  templateUrl: './my-table.component.html',
  styleUrls: ['./my-table.component.sass']
})
export class MyTableComponent implements OnChanges {

  Products = [
    { id: 1, name : "product 1", price : 100, category: 'Category 1' },
    { id: 2, name : "product 2", price : 200, category: 'Category 1' },
    { id: 3, name : "product 3", price : 300, category: 'Category 1' },
    { id: 4, name : "product 4", price : 400, category: 'Category 2' },
    { id: 5, name : "product 5", price : 500, category: 'Category 2' },
    { id: 6, name : "product 6", price : 600, category: 'Category 2' },
    { id: 7, name : "product 7", price : 700, category: 'Category 3' },
    { id: 8, name : "product 8", price : 800, category: 'Category 3' },
    { id: 9, name : "product 9", price : 900, category: 'Category 3' },
    { id: 10, name : "product 10", price : 1000, category: 'Category 3' }
  ];

  productCategory = this.Products.slice(0);

  category: Array<string> = ['Category 1', 'Category 2', 'Category 3'];

  titles: Array<string> = Object.keys(this.Products[0]);

  @Input() rows: number;
  @Output() deleted = new EventEmitter<number>();

  constructor() {}

  ngOnChanges() {
    if (typeof this.rows !== 'undefined' && this.rows < this.productCategory.length) {
      this.productCategory.length = this.rows;
    }
  }

  addRow(objForm) {
    let maxID = 1;
    const newObjectForm = Object.assign({}, objForm);
    newObjectForm.category = newObjectForm.category !== '' ? `Category ${newObjectForm.category}` : 'No category';

    if (this.productCategory.length !== 0) {
      maxID = this.productCategory.reduce((acc, curr) => acc.id > curr.id ? acc : curr).id + 1;
    }
    const newProduct = Object.assign({id: maxID}, newObjectForm);

    this.productCategory.push(newProduct);
    this.Products = this.productCategory;
  }

  deleteRow(id): void {
    this.productCategory = this.productCategory.filter(row => id !== row.id);
    this.Products = this.Products.filter(row => id !== row.id);
    this.deleted.emit(id);
  }

  filterRow(optionName): void {
    this.productCategory = this.Products;

    if (optionName !== 'all') {
      this.productCategory = this.productCategory.filter(row => row.category === optionName);
    }
  }

}
