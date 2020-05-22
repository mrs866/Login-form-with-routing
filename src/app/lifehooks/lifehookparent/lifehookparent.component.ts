import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-lifehookparent',
  templateUrl: './lifehookparent.component.html',
  styleUrls: ['./lifehookparent.component.css']
})
export class LifehookparentComponent implements OnInit {
  public cData:string;
  msg: string;
  myArray: any = ["angular 5" ,"angular6","angular7"]; 
  constructor(private msgservice:MessageService) { 
    console.log('parent constructor called');
    this.msg = msgservice.getMessage();
    console.log(this.msg);
  }
  
  ngOnInit() {
    console.log(" parent ngOnInit called");
  }
  ngOnChanges(changes: any){
    console.log(" parent ngOnChanges called");
  }
  textbind(value:any){
  this.cData = value;
}
addValue(){
  this.myArray.push("angular9")
}
}
