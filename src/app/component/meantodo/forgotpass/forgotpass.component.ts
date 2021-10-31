import { Component,  OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TodoService } from 'src/app/myservice/meantodo/todo.service';

@Component({
  selector: 'app-forgotpass',
  templateUrl: './forgotpass.component.html',
  styleUrls: ['./forgotpass.component.css']
})
export class ForgotpassComponent implements OnInit {

  constructor(private user:TodoService,private _router:Router) { }
  usermsg:any;
  msg:boolean=false;
  cond:boolean=true;
  forgotpass(arg:NgForm){
    this.user.forgotuser(arg.value).subscribe((dd:any)=>{
        // console.log(dd);
        let arr=[];
        arr.push(dd);
        // console.log(arr[0].message);
        console.log(arr);
        
        arg.reset();
        if(arr[0].success){
          // this._router.navigateByUrl("");
          this.cond=false;
          // this._router.navigateByUrl("")
        }else{
          this.usermsg=arr[0].message;
          this.msg=!this.msg;
        }
    })
  }

  ngOnInit(): void {
  }

}
