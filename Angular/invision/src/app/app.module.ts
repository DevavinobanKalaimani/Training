import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule, routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomescreenComponent } from './homescreen/homescreen.component';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UpdatepasswordComponent } from './updatepassword/updatepassword.component';
import { SuperadminComponent } from './superadmin/superadmin.component';
import { AdminComponent } from './admin/admin.component';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    routingComponent,
    HomescreenComponent,
    UpdatepasswordComponent,
    SuperadminComponent,
    AdminComponent,   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path:'', redirectTo: '/login', pathMatch:'full'}
    ]),
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
