import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { ProductsComponent } from './products/products.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { AsidebarComponent } from './asidebar/asidebar.component';
import { TopbarComponent } from './topbar/topbar.component';


@NgModule({
  declarations: [
    AdminComponent,
    ProductsComponent,
    SidebarComponent,
    FooterComponent,
    AsidebarComponent,
    TopbarComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
