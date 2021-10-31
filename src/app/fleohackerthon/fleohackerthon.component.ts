import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fleohackerthon',
  templateUrl: './fleohackerthon.component.html',
  styleUrls: ['./fleohackerthon.component.css']
})
export class FleohackerthonComponent implements OnInit {

  constructor() { }
  secondchild:any;
  isshow:boolean=false;
   Tatasteelsales:any=[{
    totalsales:200,
    targetsales:400,
    child:[
      {
        child:' factory a',
        totalsales:20,
        targetsales:100,
        show:false
      },
      {
        child:'factory b',
        totalsales:150,
        targetsales:200,
        show:false
      },
      {
        child:'factory c',
        totalsales:30,
        targetsales:100,
        show:false
      }
    ]
  }]
  showtrack=(a:number,b:number)=>{
    let percentage=(a/b)*100;
    if(percentage<=50 && percentage>20){
       return "off track";
    }else if(percentage<=20){
      return "at risk";
    }else if(percentage>=75){
      return "on track";
    }
    return null
  }
  showcard(arg:any){
    // arg.show=true;
    console.log(arg);
    this.secondchild=arg;
    this.isshow=true;
  }
  ngOnInit(): void {
  }

}
