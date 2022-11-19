import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';



const material=[
  CommonModule,
  MatButtonModule,
  MatToolbarModule

];

@NgModule({
  
  imports: [material],
  exports: [material]
})
export class MaterialModule { }