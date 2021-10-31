import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TodoService } from 'src/app/myservice/meantodo/todo.service';

@Component({
  selector: 'app-confirmpass',
  templateUrl: './confirmpass.component.html',
  styleUrls: ['./confirmpass.component.css']
})
export class ConfirmpassComponent implements OnInit {

  constructor(private user:TodoService,private _router:Router) { }
  cond:boolean=false;
  msg:any;
  resetpassword(arg:NgForm){
    console.log(arg.value.password);
   
    
    this.user.resetpassword(arg.value).subscribe((dd:any)=>{
      console.log(dd);
      let arr=[];
      arr.push(dd);
      if(arr[0].success){
        arg.reset();
        this._router.navigateByUrl("../login")
      }else{
        this.cond=true;
        this.msg=arr[0].message;
        arg.reset();
      }
    })
  }
  ngOnInit(): void {
  }

}
