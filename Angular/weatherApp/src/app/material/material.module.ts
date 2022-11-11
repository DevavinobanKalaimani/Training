import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

const material = [
    CommonModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule
];

@NgModule({
  
    imports: [material],
    exports: [material]
  })
  export class MaterialModule { }
