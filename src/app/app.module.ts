import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PassengerComponent } from './shared/components/passenger/passenger.component';
import { PassCardsComponent } from './shared/components/pass-cards/pass-cards.component';
import { PassCountComponent } from './shared/components/pass-count/pass-count.component';


@NgModule({
  declarations: [
    AppComponent,
    PassengerComponent,
    PassCardsComponent,
    PassCountComponent,
   
  ],
  imports: [
    BrowserModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
