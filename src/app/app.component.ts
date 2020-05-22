import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('divStage', [
      state('normal',style({'background-color':'red', transform: 'translateX(0)'})),
      state('newhighlighted',style({'background-color':'blue',transform: 'translateX(100px)'})),
      transition('normal<=>newhighlighted', animate(1000))
    ])
]
})
export class AppComponent {
  title = 'angular3';
  state = "normal";
  constructor() { }

  
  onAnimate(){
    this.state == 'normal' ? this.state = 'newhighlighted': this.state = 'normal';
  }
}
