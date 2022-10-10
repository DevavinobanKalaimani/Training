import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule, routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeamIdComponent } from './team-id/team-id.component';
import { HostlistenerComponent } from './hostlistener/hostlistener.component';
import { HostlistenerDirectiveDirective } from './hostlistener-directive.directive';
import { FormComponent } from './form/form.component';

 
@NgModule({
  declarations: [
    AppComponent,
    routingComponent,
    TeamIdComponent,
    HostlistenerComponent,
    HostlistenerDirectiveDirective,
    FormComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
