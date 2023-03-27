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
  const fd =new FormData;
  fd.append('image', this.selectedImage);
  fd.append('name', $("#name").val());
  fd.append('category', $("#category").val());
  fd.append('brand', $("#brand").val());
  fd.append('price', $("#price").val());
  fd.append('desc', $("#desc").val());
  this.proSer.add(fd).subscribe(
    res=>{
      message=res;
      toast.fire({
        type:"success",
        title:message
      });
      this.proSer.getFromDb("");
    },
    error=>{error.error.error.forEach((element: any)=>{toastr.error("Error",element);})
  })
};
selectForUpdate(id:any){
  this.tempID=id;
  this.products.forEach(el=>{
    if(id==el.id){
      $("#uname").prop("value",el.name)
      $("#oldcategory").prop("value",el.category)
      $("#oldcategory").html(el.category)
      $("#oldbrand").prop("value",el.brand)
      $("#oldbrand").html(el.brand)
      $("#uprice").prop("value",el.price)
      $("#udesc").prop("value",el.desc)

    }
  })

}
selectForShow(id:any){
  this.tempID=id;
  this.products.forEach(el=>{
    if(id==el.id){
      $("#sname").prop("value",el.name)
      $("#soldcategory").html(el.category)
      $("#soldcategory").prop("value",el.category)
      $("#soldbrand").html(el.brand)
      $("#soldbrand").prop("value",el.brand)
      $("#sprice").prop("value",el.price)
      $("#sdesc").prop("value",el.desc)

    }
  })

}
update(){

  var message;
  const fd =new FormData;
  // fd.append('image', this.selectedImage);
  fd.append('id', this.tempID);
  fd.append('name', $("#uname").val());
  fd.append('category', $("#ucategory").val());
  fd.append('brand', $("#ubrand").val());
  fd.append('price', $("#uprice").val());
  fd.append('desc', $("#udesc").val());
  this.proSer.update(fd).subscribe(
    res=>{
      message=res;
      toast.fire({
        type:"success",
        title:message
      });
      this.proSer.getFromDb("");
    },
    error=>{error.error.error.forEach((element: any)=>{toastr.error("Error",element);})
  })

}

selectForDelete(id:any){
  this.tempID=id;

}
deleteFrom(){
  var message;
  this.proSer.delete(this.tempID).subscribe(
    
    res=>{
      message=res;
      toast.fire({
        type:"success",
        title:message
      });
      this.proSer.getFromDb("");
    },
    error=>{error.error.error.forEach((element: any)=>{toastr.error("Error",element);})
  })
}
}
