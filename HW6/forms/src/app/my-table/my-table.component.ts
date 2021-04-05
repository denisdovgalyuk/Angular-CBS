import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import {ProductsService} from "../services/products.service";

interface IProducts {
  id: number;
  name: string;
  price: number;
  category: string;
}

@Component({
  selector: 'app-my-table',
  templateUrl: './my-table.component.html',
  styleUrls: ['./my-table.component.sass']
})
export class MyTableComponent implements OnInit {

  @Input() rows: number;
  @Output() deleted = new EventEmitter<number>();
  productCategory: IProducts[];
  titles: Array<string>;
  category: Array<string> = ['Category 1', 'Category 2', 'Category 3'];


  constructor(private serviceData: ProductsService) {
  }

  ngOnInit() {
    this.productCategory = this.serviceData.data.getData().slice(0);
    this.titles = Object.keys(this.serviceData.data.getData()[0]);

    if (typeof this.rows !== 'undefined' && this.rows < this.productCategory.length) {
      this.productCategory.length = this.rows;
    }
  }

  addRow(objForm) {
    let maxID = 1;
    const newObjectForm = Object.assign({}, objForm);
    newObjectForm.category = !(+newObjectForm.category < 0 || +newObjectForm.category > 3) ? `Category ${newObjectForm.category}` : 'No category';

    if (this.productCategory.length !== 0) {
      maxID = this.serviceData.data.getData().reduce((acc, curr) => acc.id > curr.id ? acc : curr).id + 1;
    }
    const newProduct = Object.assign({id: maxID}, newObjectForm);

    this.serviceData.data.getData().push(newProduct);

  }

  deleteRow(id): void {
    this.productCategory = this.productCategory.filter(row => id !== row.id);
    this.serviceData.data.setData(this.serviceData.data.getData().filter(row => id !== row.id));
    this.deleted.emit(id);
  }

  filterRow(optionName): void {
    this.productCategory = this.serviceData.data.getData();

    if (optionName !== 'all') {
      this.productCategory = this.productCategory.filter(row => row.category === optionName);
    }
  }

}
