import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent }   from './app.component';
import { routing } from './app.routing';
import { AreaSelectorComponent } from './areaselector/areaselector.component'
import { SubscriptionFormComponent } from './areaselector/subscription-form.component'
import { SubscriptionService } from './services/subscription.service'

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    HttpModule,
    JsonpModule,
    routing 
    ],
  declarations: [ 
        AppComponent,
        AreaSelectorComponent,
        SubscriptionFormComponent
  ],
  providers: [
      SubscriptionService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
