import { Component, OnInit } from '@angular/core';
import {IProducts} from "../../interfaces";
import {ProductsService} from "../../services/products.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})
export class ProductsComponent implements OnInit {

  products: IProducts[];

  constructor(
    private productsService: ProductsService,
    private router: Router) { }

  ngOnInit(): void {
    this.products = this.productsService.data.getProducts();
  }

  redirectToProductDetails(id) {
    // TASK 2
    // this.router.navigate(['/details', id]);

    // TASK 3
    this.router.navigate(['/products', 'details', id]);
  }
}
