import { Component, OnInit,Input, Output, EventEmitter, OnChanges} from '@angular/core';
import { Subject } from 'rxjs';
import { AppService } from '../app.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges {

  @Input() public name: any;
  @Input() public parentData: string = ''; 
  @Input() public childData: string = '';
  @Output() public childEventForParent = new EventEmitter(); 
  @Output() public childEventForChild = new EventEmitter();
  fromSub: any;

  constructor(private appService: AppService) { 

      this.appService.sub.subscribe( x => 
        {console.log('from child sub', x)
        this.fromSub = x;
      });
   
  }

  ngOnChanges(changes: any){
    console.log('child working!!', changes);
  }

  ngOnInit(): void {
  }

  sendDataToParent(){
    this.childEventForParent.emit('Hello Dad');
  }

  sendDataToSibling(){
    this.childEventForChild.emit('Hello Sibling');
  }

  change(){
    this.childEventForChild.emit('Hi Sibling')
  }

emit(){
  this.appService.sendEmit(Math.random());
}

}