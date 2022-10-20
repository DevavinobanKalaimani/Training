import { Component, OnInit,Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { AppService } from '../app.service';
@Component({
  selector: 'app-sibling',
  templateUrl: './sibling.component.html',
  styleUrls: ['./sibling.component.css']
})
export class SiblingComponent implements OnInit, OnChanges {

  @Input() public parentData: string = '';
  @Input() public childData: string = '';
  @Output() public childEventforParent = new EventEmitter();
  @Output() public childEventforChild = new EventEmitter();

  constructor(private appService: AppService) { 

    this.appService.sub.subscribe( x => 
      console.log('from sibling sub', x));
 
}

  ngOnChanges(changes: any){
    console.log('sibling working!!', changes);
  }

  ngOnInit(): void {
  }

  sendDataToParent(){
    this.childEventforParent.emit('Hello Dadda');
  }
  sendDataToChild(){
    this.childEventforChild.emit('Hello Sibling');
  }

 

}