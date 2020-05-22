import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, DoCheck } from '@angular/core';

@Component({
  selector: 'app-lifehookchild',
  templateUrl: './lifehookchild.component.html',
  styleUrls: ['./lifehookchild.component.css']
})
export class LifehookchildComponent implements OnInit, OnChanges,DoCheck {
 currValue: string;
 prevValue:string;
 
  @Input()
  pData: any = [];

  @Input()
  arrList: string;
   @Input() parentData:number;
  //**ngOnInit**
  // @Output()
  // childEvent = new EventEmitter();
  constructor() { 
    console.log('child constructor called');
  }

  ngOnInit() {
    console.log(" child ngOnInit called");
  }
  //  onchange(data: any){
  //    this.childEvent.emit(data);
  //  }
  ngOnChanges(changes: SimpleChanges){
    console.log(" child ngOnChanges called");
    console.log(changes.parentData.currentValue);
    // for(let propertyName in changes){
    //   let change = changes[propertyName];

    //   this.currValue = change.currentValue;
    //   this.prevValue = change.previousValue;

    //   console.log("propertyName + Curreny Value:" + this.currValue + "Previous Value:" + this.prevValue)
    // }
  }
  ngDoCheck()
  {
    console.log("ngDoCheck called")
  }
}
