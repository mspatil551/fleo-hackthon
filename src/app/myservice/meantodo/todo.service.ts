import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http:HttpClient) { }
  islive=true;
  url=this.islive?"https://maheshtodo.herokuapp.com/api/v1":"http://localhost:4500/api/v1";
  createuser(arg:any){
    return this.http.post(`${this.url}/user`,arg);
  }
  getuser(){
    const tt= localStorage.getItem("token");
    const headers={
      "headers":({
        'authorization':`${tt}`
      })
    }
    return this.http.get(`${this.url}/user`,headers);
  }
  getsingleuser(id:any){
    return this.http.get(`${this.url}/user`);
  }
  loginuser(arg:any){
    return this.http.post(`${this.url}/login`,arg);
  }
  forgotuser(arg:any){
    return this.http.post(`${this.url}/user/forgot`,arg);
  }
  changepassword(arg:any){
    const tt= localStorage.getItem("token");
    const headers={
      "headers":({
        'authorization':`${tt}`
      })
    }
    return this.http.put(`${this.url}/changepassword`,arg,headers);
  }
  checklink(id:any){
    
    return this.http.get(`${this.url}/user/forgot/${id}`);
  }
  resetpassword(arg:any){
    const tt= localStorage.getItem("token");
    const headers={
      "headers":({
        'authorization':`${tt}`
      })
    }
    return this.http.put(`${this.url}/changepassword/resetpassword`,arg,headers);
  }
}
