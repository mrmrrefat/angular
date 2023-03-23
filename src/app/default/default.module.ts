import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DefaultRoutingModule } from './default-routing.module';
import { DefaultComponent } from './default.component';
import { DpproductsComponent } from './dpproducts/dpproducts.component';


@NgModule({
  declarations: [
    DefaultComponent,
    DpproductsComponent
  ],
  imports: [
    CommonModule,
    DefaultRoutingModule
  ]
})
export class DefaultModule { }
