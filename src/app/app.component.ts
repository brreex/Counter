import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  count:number;
  constructor(){
    this.count = 0;
  }

  changeCounter(value){
    this.count+=value;
  }
}
