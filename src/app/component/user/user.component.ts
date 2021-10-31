import { Component, OnInit } from '@angular/core';
// import { format } from 'path';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  data:any=[];
  userdata:any=[];
  constructor() { }   
getdata(arg:any){
 try {
  this.userdata.push(arg);
  console.log(this.userdata);
  // format.reset();
  arg.reset();
} catch (error) {
  console.log(error);
 }
 localStorage.setItem("freshertrainingdata",JSON.stringify(this.userdata));
}
 
  ngOnInit(): void {

    this.data=localStorage.getItem("freshertrainingdata");
  
   if(this.data!=null){
    if(this.data.length!=0){
      console.log(this.data);
      console.log(this.data.length);
      
      console.log("inside");
      
      this.userdata=JSON.parse(this.data);
    }
   }
    console.log("outside");
    // console.log(this.data);
  }

}
