import { Component, OnInit } from '@angular/core';
import { UsernameserviceService } from 'src/app/myservice/usernameservice.service';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})
export class UsernameComponent implements OnInit {

  constructor(private user:UsernameserviceService) { }
  usernamedata:any=[];
  msgcond:boolean=false;
  upadateusername:any="";
  username:any=[];
  myid:any;
  createusernamedata(arg:any){
    console.log(arg);
    this.user.createuserdata(arg).subscribe((dd)=>{
      console.log(dd);
    })
    this.msgcond=true;
  }
  showusernamedata(){
    this.user.getuserdata().subscribe((dd)=>{
      // console.log(dd);\
      this.username=[];
      this.usernamedata.push(dd);
       console.log("dd log"+dd);
      console.log(this.usernamedata);
      
    })
  }
  updateusername(id:any){
    console.log(id);
    this.user.getsingleuserdata(id).subscribe((dd)=>{
          this.username.push(dd);
          console.log("upadate dd"+dd);
          this.myid=id;
          this.upadateusername=this.username[0].data[0].username;
          console.log("upadate dd"+this.username[0].data[0].username);
          
    })
  }

  finalupdateusername(){
    let obj={
      username:this.upadateusername
    }
    this.user.updateuserdata(obj,this.myid).subscribe((dd)=>{
      console.log(dd);
      
    })
  }
  deleteusername(id:any){
    console.log(id);
    this.user.deleteuserdata(id).subscribe((dd)=>{
      console.log(dd);
      
    })
  }
  ngOnInit(): void {
  }

}
