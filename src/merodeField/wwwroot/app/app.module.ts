import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { routing } from './app.routing';
import { AreaSelectorComponent } from './areaselector/areaselector.component'
import { SubscriptionComponent } from './areaselector/subscription.component'

@NgModule({
  imports:      [ 
    BrowserModule, 
    routing 
    ],
  declarations: [ 
        AppComponent,
        AreaSelectorComponent,
        SubscriptionComponent
    ],
  bootstrap:    [ AppComponent ],
})
export class AppModule { }
