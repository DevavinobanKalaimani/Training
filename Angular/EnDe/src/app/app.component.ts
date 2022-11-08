import { Component } from '@angular/core';
import * as CryptoJS from 'crypto-js';  
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EnDe';

  public message: any;
  public password: any;
  public encryptedMessage: any;
  public decryptedMessage: any;
  
  

  encrypt() {
   this.encryptedMessage = CryptoJS.AES.encrypt(this.message.trim(), this.password.trim()).toString();
  }
  decrypt(){
    this.decryptedMessage = CryptoJS.AES.decrypt(this.encryptedMessage.trim(), this.password.trim()).toString(CryptoJS.enc.Utf8);
  }
}
