import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { RecentSearchComponent } from './recent-search/recent-search.component';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import { MaterialModule } from './material/material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecentDialogComponent } from './recent-dialog/recent-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainComponent,
    FavouriteComponent,
    RecentSearchComponent,
    DialogBoxComponent,
    RecentDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
