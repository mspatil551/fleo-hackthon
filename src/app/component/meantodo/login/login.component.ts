import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TodoService } from 'src/app/myservice/meantodo/todo.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private user:TodoService,private _router:Router) { 
    if(localStorage.getItem("token")){
      localStorage.removeItem("token");
    }
  }
  arr:any=[];
  usermsg:any;
  msg:boolean=false;
  loginuser(arg:NgForm){
    // console.log(arg);
    
    this.user.loginuser(arg.value).subscribe((dd)=>{
      this.arr=[];
      this.arr.push(dd);
      // console.log(this.arr[0].token);
      // console.log(this.arr[0].success);
      
      localStorage.setItem("token",this.arr[0].token);
       if(this.arr[0].success){
        this._router.navigateByUrl('todo');
      }else{
        this.msg=true;
        this.usermsg=this.arr[0].message;
        // console.log(this.arr[0]);
        arg.reset();
      }
     
    })
     
     
  }
   
  ngOnInit(): void {
  }

}
