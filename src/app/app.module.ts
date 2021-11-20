import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConntentcomponentComponent } from './conntentcomponent/conntentcomponent.component';
import { ContentdetailcomponentComponent } from './contentdetailcomponent/contentdetailcomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    ConntentcomponentComponent,
    ContentdetailcomponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
