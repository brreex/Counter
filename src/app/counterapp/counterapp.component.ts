import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'counterapp',
  templateUrl: './counterapp.component.html'
})
export class CounterappComponent {
@Input() count;
@Output() counterChange:EventEmitter<number>;
  constructor() {
    this.counterChange = new EventEmitter();
  }

  increment(){
    this.counterChange.emit(1);
  }
  decrement(){
    this.counterChange.emit(-1);
  }
}
