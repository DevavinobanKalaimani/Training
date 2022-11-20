import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


const material=[
  CommonModule,
  MatButtonModule,
  MatToolbarModule,
  MatProgressSpinnerModule
];

@NgModule({
  
  imports: [material],
  exports: [material]
})
export class MaterialModule { }