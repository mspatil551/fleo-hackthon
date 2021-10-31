import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TodoappService } from 'src/app/myservice/todoapp.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
   mydata:any=[];
   mytask:any;
   mydesc:any;
   myprio:any;
   editdata:any=[];
   myid:any;
   myusername:any;
   myuseremail:any;
  constructor(private _router:Router,private todo:TodoappService) { 
    this.todo.gettodouser().subscribe((dd)=>{
      this.mydata=[];
      this.mydata.push(dd);

    })
  }
  todofunction(arg:NgForm){
    console.log(arg);
    this.todo.createtodouser(arg.value).subscribe((dd)=>{
      console.log(dd);
      this.todo.gettodouser().subscribe((dd)=>{
        console.log(dd);
        this.mydata=[];
        this.mydata.push(dd);
        arg.reset();
      })
    })
  }
  edittodo(arg:any){
    // console.log(arg._id);
    this.todo.getsingletodouser(arg._id).subscribe((dd)=>{
      console.log(dd);
      this.editdata=[]; 
      this.editdata.push(dd);
      console.log(this.editdata);
      this.mytask=this.editdata[0].data.task;
      this.mydesc=this.editdata[0].data.desc;
      this.myprio=this.editdata[0].data.priority;
      this.myid=this.editdata[0].data._id;
    })
   
  }
  updatetodouser(){
    console.log(this.editdata[0].data.desc);
   let myobj={
      task:this.mytask,
      desc:this.mydesc,
      priority:this.myprio
    }
    this.todo.updatetodouser(this.myid,myobj).subscribe((dd)=>{
      this.todo.gettodouser().subscribe((dd)=>{
        console.log(dd);
        this.mydata=[];
        this.mydata.push(dd);
      })
    })
  }
  deletetodo(arg:any){
    console.log(arg);
    this.myid=arg._id;
    console.log(arg._id);
    
  }
  deleteusertodo(){
this.todo.deletetodouser(this.myid).subscribe((dd)=>{
  this.todo.gettodouser().subscribe((dd)=>{
    console.log(dd);
    this.mydata=[];
    this.mydata.push(dd);
  })
})
  }
  getuserinformation(){
    this.todo.getuserinformation().subscribe((dd:any)=>{
      let userinfo=[];
      userinfo.push(dd);
      
      // console.log(userinfo[0].data[0]);
      this.myusername=userinfo[0].data[0].username;
      this.myuseremail=userinfo[0].data[0].email;
    })
  }
  logoutuser(){
    localStorage.removeItem("token");
    this._router.navigateByUrl('');
  }
  addanotheraccount(){
    localStorage.removeItem("token");
    this._router.navigateByUrl('login');
  }
  ngOnInit(): void {
    
  }

}
