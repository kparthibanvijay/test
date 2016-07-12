import {Component} from 'angular2/core';

@Component({
  selector: 'my-app',
  template: `
  <h1 [style.color]="color">{{title}}</h1>
  <input #f [value]="color" type="text" (keyup)="0"> value: {{f.value}}
  <button (click)="onClickMe(f.value)">ClickMe</button>
  `
})
export class AppComponent { 
  title: string = "Angular 2";
  color:string = "Red";
  onClickMe(v:string) {
    this.color = v;
    console.log(v);
  }
}

