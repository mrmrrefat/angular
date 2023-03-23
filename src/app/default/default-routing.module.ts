import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './default.component';
import { DpproductsComponent } from './dpproducts/dpproducts.component';

const routes: Routes =

  [{path:"",component:DefaultComponent,children:[
    {path:"product",component:DpproductsComponent}

  ]}


  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DefaultRoutingModule { }
