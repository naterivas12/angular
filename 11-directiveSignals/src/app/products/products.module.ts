import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductPageComponent } from './pages/product-page/product-page.component';

import {ReactiveFormsModule} from '@angular/forms';
import { ProductsRoutingModule } from './products-routing.module';

@NgModule({
  declarations: [

    ProductPageComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    ReactiveFormsModule
  ]
})
export class ProductsModule { }
