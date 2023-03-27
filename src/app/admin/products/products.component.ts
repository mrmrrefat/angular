import { Component, OnInit } from '@angular/core';
import { error } from 'jquery';
import { productModel } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';
declare var $:any;
declare var toastr:any;
declare var toast:any;


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: productModel[] = [];
  selectedImage!:File;
  tempID="";
constructor( private proSer:ProductService){

}
ngOnInit(): void {
  this.proSer.AllProducts.subscribe(res=>{
    this.products=res
    console.log(this.products)
  });
}
search(input:string){
  // alert(input);
  this.proSer.getFromDb(input);
}
onSelect(event: any){
  var tmppath =URL.createObjectURL(event.target.files[0]);
  $("#AddEmpImage").fadeIn("fast").attr('src',tmppath);
  this.selectedImage=<File>event.target.files[0];

}
add(){
  var message;
  const fd=new FormData();
  fd.append('image',this.selectedImage);
  fd.append('name',$("#name").val());
  fd.append('category',$("#category").val());
  fd.append('brand',$("#brand").val());
  fd.append('price',$("#price").val());
  fd.append('desc',$("#desc").val());
  this.proSer.add(fd).subscribe(
    res=>{
      message=res;
      toast.fire({
        type:"success",
        title:message });
        this.proSer.getFromDb("");
    },
    // error=>{error.error.error.forEach(element=>{toastr.error("Error",element);});
// }
);
}

}
