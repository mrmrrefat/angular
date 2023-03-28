import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactusComponent } from './contactus/contactus.component';
import { DefaultComponent } from './default.component';
import { DpproductsComponent } from './dpproducts/dpproducts.component';

const routes: Routes =

  [{path:"",component:DefaultComponent,children:[
    {path:"",component:DpproductsComponent},
    {path:"contactus",component:ContactusComponent},

    {path:"about",component:AboutComponent},

    {path:"product",component:DpproductsComponent}

  ]}


  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DefaultRoutingModule { }
