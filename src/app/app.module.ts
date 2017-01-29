import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RegalosComponent } from './regalos/regalos.component';
import { RegalosComponent } from './app/regalos/regalos.component';

@NgModule({
  declarations: [
    AppComponent,
    RegalosComponent,
    RegalosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
