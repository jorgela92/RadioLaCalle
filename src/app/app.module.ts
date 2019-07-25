import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MixcloundService} from './services/mixclound.service';
import {AppRoutingModule} from './app-routing.module';
import {LazyViewport} from './components/lazy-viewport';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    MixcloundService,
    LazyViewport
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
