import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
declare var $:any;
declare var toastr:any;
declare var toast:any;
@Component({
  selector: 'app-dregistration',
  templateUrl: './dregistration.component.html',
  styleUrls: ['./dregistration.component.css']
})
export class DregistrationComponent implements OnInit {
constructor (private UserSer:UserService){}
ngOnInit(): void {
}
register(){
  if($("pass").val()!=$("cpass").val()){
    toastr.error("Error","both passwords must be identical");
  }else{
    
    var message;
    const fd=new FormData();
    fd.append('name',$("#rname").val());
    fd.append('email',$("#rEmail").val());
    fd.append('password',$("#rpass").val());
    this.UserSer.register(fd).subscribe(
      res=>{
        message=res;
        toast.fire({
          type:"success",
          title:"successfully registered" 
        });
      },
      // error=>{error.error.error.forEach(element=>{toastr.error("Error",element);});
  // }
  );
  }
}

}
