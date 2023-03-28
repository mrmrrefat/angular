import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
declare var $:any;
declare var toastr:any;
declare var toast:any;
@Component({
  selector: 'app-dlogin',
  templateUrl: './dlogin.component.html',
  styleUrls: ['./dlogin.component.css']
})
export class DloginComponent implements OnInit{

  constructor (private UserSer:UserService,private router:Router){}
  ngOnInit(): void {
  }
  login(){  
      var message;
      const fd=new FormData();
      // fd.append('name',$("#name").val());
      fd.append('email',$("#lemail").val());
      fd.append('password',$("#lpass").val());
      this.UserSer.login(fd);
      this.router.navigateByUrl('admin/product');
    //   .subscribe(
    //     res=>{
    //       message=res;
    //       toast.fire({
    //         type:"success",
    //         title:"successfully logged" });
    //     },
    //     // error=>{error.error.error.forEach(element=>{toastr.error("Error",element);});
    // // }
    // );
    }
  }

