import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsernameserviceService {

  constructor(private http:HttpClient) { }
  getuserdata(){
    return this.http.get("https://maheshapinode.herokuapp.com/api/v1/username");
  }
  createuserdata(arg:any){
    return this.http.post("https://maheshapinode.herokuapp.com/api/v1/username",arg);
  }
  updateuserdata(arg:any,id:any){
    return this.http.put(`https://maheshapinode.herokuapp.com/api/v1/username/${id}`,arg);
  }
  deleteuserdata(id:any){
    return this.http.delete(`https://maheshapinode.herokuapp.com/api/v1/username/${id}`);
  }
  getsingleuserdata(id:any){
    return this.http.get(`https://maheshapinode.herokuapp.com/api/v1/username/${id}`);
  }
}
