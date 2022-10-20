import { Component} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PassingData';
  name = 'Parent';
  // fromSub = null;
  public nameToChild1 = "";
  public nameToChild2 = "";
  public messageFromChildren:string='';
  public message1:string='';
  public messageFromChild1:string="";
  public msgFromChild2:string="";



 
  
  sendDataToChild(){
    this.nameToChild1="Hello Child";
  }

  sendDataToSibling(){
    this.nameToChild2="Hello Child";
  }


}