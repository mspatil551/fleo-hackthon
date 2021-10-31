import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TodoService } from 'src/app/myservice/meantodo/todo.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private user:TodoService,private _router:Router) {
    if(localStorage.getItem("token")!=null){
      localStorage.removeItem("token")
    }
   }
  msg:boolean=false;
  usermsg:any;
  registeruser(arg:NgForm){
    this.user.createuser(arg.value).subscribe((dd:any)=>{
      // console.log(dd.success);
      let myarr=[];
      myarr.push(dd);
      // console.log();
      
      if(myarr[0].success){
          this._router.navigateByUrl("login");
      }else{
        this.msg=true;
        this.usermsg=myarr[0].message;
        arg.reset();
      }
    })
  }
  ngOnInit(): void {
  }

}
