import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {

  constructor() { }
  form1=new FormGroup({
    email:new FormControl("" ,[Validators.required, Validators.email]),
    description:new FormControl("" ,[Validators.required]),
    skills:new FormArray([])
  })
  addfield(){
    const fc=new FormControl("" ,[Validators.required]);
    (<FormArray>this.form1.get('skills')).push(fc);
  }
  reactiveform(){
    // console.log(this.form1);
    // this.form1.reset();
   
    console.log(this.form1.value.skills);
    
  }
  removeitem(i:any){
    console.log(i);
    console.log((<FormArray>this.form1.get('skills')).controls);
    
    // (<FormArray>this.form1.get('skills')).controls.splice(i,1);
    (<FormArray>this.form1.get('skills')).removeAt(i);
  }
  trackbyfun(index:any,item:any){
    return index
    console.log("myindex",index);
    
  }
  ngOnInit(): void {
  }

}
