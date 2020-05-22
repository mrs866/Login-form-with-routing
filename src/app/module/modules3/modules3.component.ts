import { Component, OnInit } from '@angular/core';
import { SlideInOutAnimation } from '../modules/animations';

@Component({
  selector: 'app-modules3',
  templateUrl: './modules3.component.html',
  styleUrls: ['./modules3.component.css'],
  animations: [SlideInOutAnimation,
  ]

})
export class Modules3Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  animationState = 'out';

  toggleShowDiv(divName: string) {
    if (divName === 'divA') {
      console.log(this.animationState);
      this.animationState = this.animationState === 'out' ? 'in' : 'out';
      console.log(this.animationState);
    }
  }
}
