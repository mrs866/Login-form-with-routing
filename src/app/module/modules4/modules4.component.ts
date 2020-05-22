import { Component, OnInit } from '@angular/core';
import { style, animate, trigger, state, transition } from '@angular/animations';


@Component({
  selector: 'app-modules4',
  templateUrl: './modules4.component.html',
  styleUrls: ['./modules4.component.css'],
  animations: [
      trigger('divStage',[
        state('normal',style({'background-color':'red',transform: 'translateX(0)'})),
        state('newhighlighted',style({'background-color':'blue',transform: 'translateX(500px)'})),
        transition('normal<=>newhighlighted', animate(1000)),  
      ])
  ]
})
export class Modules4Component  {
  state: string;

  constructor() { }

  
  onAnimate(){
    this.state == 'normal' ? this.state = 'newhighlighted': this.state = 'normal';
  }
}
