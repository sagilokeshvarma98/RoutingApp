import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenubarComponent } from './common/menubar/menubar.component';
import { HomeComponent } from './menus/home/home.component';
import { ContactComponent } from './menus/contact/contact.component';
import { AboutComponent } from './menus/about/about.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { AddressComponent } from './menus/contact/address/address.component'

@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    AddressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
