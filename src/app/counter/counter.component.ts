import { Component } from '@angular/core';

@Component({
  selector: 'counter',
  templateUrl: './counter.component.html'
})
export class CounterComponent {
  private count:number;
  constructor() {
    this.count = 0;
  }
  increment(){
    this.count+=1;
  }
  decrement(){
    this.count-=1;
  }
}
