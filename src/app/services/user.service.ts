import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
      localStorage.setItem("user",r.user)
    })

  }

  public register(form:any)
  {
    return this.http.post(this.baseUrl+"register",form )

  }
}
