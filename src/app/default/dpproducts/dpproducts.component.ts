import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { productModel } from 'src/app/models/product.model';

@Component({
  selector: 'app-dpproducts',
  templateUrl: './dpproducts.component.html',
  styleUrls: ['./dpproducts.component.css']
})
export class DpproductsComponent  implements OnInit{
  products: productModel[] = [];

  constructor( private proSer:ProductService){

  }
  ngOnInit(): void {
    this.proSer.AllProducts.subscribe(res=>{
      this.products=res
      console.log(this.products)
    });
  }
}
