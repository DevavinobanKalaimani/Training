import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';

const material = [
    CommonModule,
    MatDialogModule,
    MatIconModule
];

@NgModule({
  
    imports: [material],
    exports: [material]
  })
  export class MaterialModule { }
