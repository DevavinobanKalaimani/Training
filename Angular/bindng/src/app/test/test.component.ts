import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { reduce } from 'rxjs';


@Component({
  selector: 'app-test',
  template: `
  <h2>
    {{name}}
    </h2>
    <input [id] = 'myId' type = 'text' value = 'Deva' class = 'text-danger'>
   
    <button (click) = "onClick()">Greet</button>
    <button (click) = "greeting = 'welcome saab!'">Greet</button>
    {{greeting}}
    
    <input [(ngModel)]= "Name" type = "text">
    {{Name}}
    
    <h2 *ngIf="displayName; else elseBlock">
    Angular Practice
    </h2>
    <ng-template #elseBlock>
    <h2> OOPSS!!</h2>
    </ng-template>

    <div [ngSwitch] = "colo">
        <div *ngSwitchCase="'red'">u picked red!</div>
        <div *ngSwitchCase="'blue'">u picked blue!</div>
        <div *ngSwitchCase="'green'">u picked green!</div>
        <div *ngSwitchDefault>pls pick..</div>
    </div>

    <div *ngFor= "let color of colors; index as i">
        <h2>{{i}} {{color}}</h2>
    </div>
    
    <h2> {{"Heloo" + parentData}} </h2>
    <button (click) = "sendEvent()">send event</button>
    `,
  styles: [`
  .text-danger{
    color : red;
  }
 ` ]
})
export class TestComponent implements OnInit {

    public name = 'Devaaa!!';
    public Name = "";
    public myId = 'myTest';
    public greeting = "";
    public displayName = false;
    public colo = "orange";
    public colors = ["orange", "red", "blue", "green"];
    @Input() public parentData: any;
    @Output() public childEvent = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }
  onClick(){
    console.log('Hellooo');
    this.greeting = 'Welcome to my youtube channel'
  }

  sendEvent(){
    this.childEvent.emit("Hey Devaa:)")
  }

}
