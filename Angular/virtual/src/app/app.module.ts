import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LogInComponent } from './log-in/log-in.component';
import { MaterialModule } from './material/materail.module';
import { ReactiveFormsModule } from '@angular/forms';
import {  HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { AuthserviceInterceptor } from './auth.interceptor';
import { NavbarComponent } from './navbar/navbar.component';
import { OverviewComponent } from './overview/overview.component';
import { LogoutComponent } from './logout/logout.component';
import { MatDialogModule } from '@angular/material/dialog';
// import { EmbedVideo } from 'ngx-embed-video';
import {VgCoreModule} from '@videogular/ngx-videogular/core';
import {VgControlsModule} from '@videogular/ngx-videogular/controls';
import {VgOverlayPlayModule} from '@videogular/ngx-videogular/overlay-play';
import {VgBufferingModule} from '@videogular/ngx-videogular/buffering';
import { SeeAllComponent } from './see-all/see-all.component';
import { ModuleTestComponent } from './module-test/module-test.component';
import { AllOngoingComponent } from './all-ongoing/all-ongoing.component';
 



@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    HomeComponent,
    NavbarComponent,
    OverviewComponent,
    LogoutComponent,
    SeeAllComponent,
    ModuleTestComponent,
    AllOngoingComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule,
    // EmbedVideo.forRoot(),
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule
    
    
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthserviceInterceptor,
      multi: true,

    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
