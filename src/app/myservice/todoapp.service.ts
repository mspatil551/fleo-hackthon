import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoappService {

  constructor(private http:HttpClient) {
    
   }
   islive=true;
   url=this.islive?"https://maheshtodo.herokuapp.com/api/v1":"http://localhost:4500/api/v1";
  createtodouser(arg:any){
    const tt= localStorage.getItem("token");
    const headers={
      "headers":({
        'authorization':`${tt}`
      })
    }
    return this.http.post(`${this.url}/todo`,arg,headers);
  }
  gettodouser(){
    const tt= localStorage.getItem("token");
    
    const headers={
      "headers":({
        'authorization':`${tt}`
      })
    }
    return this.http.get(`${this.url}/todo`,headers);
  }
  getsingletodouser(id:any){
    const tt= localStorage.getItem("token");
    const headers={
      "headers":({
        'authorization':`${tt}`
      })
    }
    return this.http.get(`${this.url}/todo/${id}`,headers);
  }
  updatetodouser(id:any,arg:any){
    const tt= localStorage.getItem("token");
    const headers={
      "headers":({
        'authorization':`${tt}`
      })
    }
    return this.http.put(`${this.url}/todo/${id}`,arg,headers);
  }
  deletetodouser(id:any){
    const tt= localStorage.getItem("token");
    const headers={
      "headers":({
        'authorization':`${tt}`
      })
    }
    return this.http.delete(`${this.url}/todo/${id}`,headers);
  }
  getuserinformation(){
    const tt= localStorage.getItem("token");
    const headers={
      "headers":({
        'authorization':`${tt}`
      })
    }
    return this.http.get(`${this.url}/user/userinformation`,headers);
  }
}
