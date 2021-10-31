import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TodoService } from 'src/app/myservice/meantodo/todo.service';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {

  constructor(private user:TodoService) { }
  changepassword(arg:NgForm){
    console.log(arg.value);
    this.user.changepassword(arg.value).subscribe((dd)=>{
        console.log(dd);
        
    })
  }
  ngOnInit(): void {
  }

}
