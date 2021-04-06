import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {ProductsComponent} from "./components/products/products.component";
import {AdminComponent} from "./components/admin/admin.component";
import {DetailsComponent} from "./master/details/details.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'details/:id', component: DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
