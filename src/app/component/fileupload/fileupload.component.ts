import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.css']
})
export class FileuploadComponent implements OnInit {
  uploadImageform =new FormGroup({
    file: new FormControl(null,[Validators.required])
  })
  myimg="";
  uploadImage(){
    const postdata=new FormData();
    postdata.append("file",this.uploadImageform.value.file);
    this.http.post("http://localhost:5300/uploadimg",postdata).subscribe((dd)=>{
    console.log(dd);
    
    })
  }
  pickImag(e:Event){
    // console.log(<HTMLInputElements>e.target.files);
    const filelist =(<HTMLInputElement> e.target).files;
    if(filelist && filelist.length>0){
      console.log(filelist);
      this.uploadImageform.patchValue({File:filelist[0]})
      this.uploadImageform.get('file')?.updateValueAndValidity();
      // check the validation
      const reder=new FileReader();
      reder.onload=()=>{
        this.myimg=reder.result as string;

      }
      reder.readAsDataURL(filelist[0]);
    }
  }
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

}
