import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }   from './app.component';
import { routing } from './app.routing';
import { AreaSelectorComponent } from './areaselector/areaselector.component'
import { SubscriptionFormComponent } from './areaselector/subscription-form.component'

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    routing 
    ],
  declarations: [ 
        AppComponent,
        AreaSelectorComponent,
        SubscriptionFormComponent
    ],
  bootstrap:    [ AppComponent ],
})
export class AppModule { }
