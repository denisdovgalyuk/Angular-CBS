import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductsService} from "../../services/products.service";
import {IProducts} from "../../interfaces";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.sass']
})
export class DetailsComponent implements OnInit {

  product: IProducts;

  constructor(
    private activeRoute: ActivatedRoute,
    private productsService: ProductsService) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(params => {
      console.log(params);
      this.product = this.productsService.data.getById(+params.id);
      console.log(this.product)
    })
  }

}
