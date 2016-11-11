import { Component, Input } from '@angular/core';
import { Subscription } from './subscription';
import { Field, Area } from './field';

@Component({
    selector: 'subscription-form',
    templateUrl: 'app/areaselector/subscription-form.component.html'
})
export class SubscriptionFormComponent {
    @Input()
    public areas: Area[];
    public subscription: Subscription;
    
    constructor(){
        this.subscription = new Subscription();
    }
}