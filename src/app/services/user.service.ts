import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
declare var $:any;
declare var toastr:any;
declare var toast:any;
// declare var element:any;
@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  constructor(private http:HttpClient)  {}

  private baseUrl="http://localhost:8000/api/";

  public login(form:any)
  {
    return this.http.post(this.baseUrl+"login",form ).subscribe(res=>{
      var r:any =res;
      localStorage.setItem("user",JSON.stringify(r.user))
      // toastr.success("Succeess","user successfully registered");
    }
    // , error=>{error.error.error.forEach(element=>{toastr.error("Error",element)})}
    );

  }

  public register(form:any)
  {
    return this.http.post(this.baseUrl+"register",form )

  }
}
