import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyTableComponent } from './my-table/my-table.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddProductComponent } from './add-product/add-product.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AddProductDataDrivenComponent } from './add-product-data-driven/add-product-data-driven.component';

@NgModule({
  declarations: [
    AppComponent,
    MyTableComponent,
    AddProductComponent,
    AddProductDataDrivenComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
