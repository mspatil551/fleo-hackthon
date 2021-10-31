import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoService } from 'src/app/myservice/meantodo/todo.service';

@Component({
  selector: 'app-verfy',
  templateUrl: './verfy.component.html',
  styleUrls: ['./verfy.component.css']
})
export class VerfyComponent implements OnInit {

  constructor(private route:ActivatedRoute,private users:TodoService,private _router:Router) { 
     
  }
  display:boolean=true;
  meassage:any;
  ngOnInit(): void {
    ActivatedRoute
    this.route.params.subscribe((dd)=>{
      // console.log(dd);
      let arr=[];
      arr.push(dd);
      // console.log(arr);
      
      this.users.checklink(arr[0].id).subscribe((dd:any)=>{
        let myarr=[];
        myarr.push(dd);
        console.log(myarr[0]);
        localStorage.removeItem("token");
        if(myarr[0].token){
          localStorage.setItem("token",myarr[0].token);
          this._router.navigateByUrl("resetpassword");
        }else{
            this.meassage=myarr[0].message;
            this.display=false;
        }
      })
    })
  }

}
