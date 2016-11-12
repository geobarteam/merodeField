import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Subscription } from './subscription';
import { Field, Area } from './field';

@Component({
    selector: 'subscription-form',
    templateUrl: 'app/areaselector/subscription-form.component.html'
})
export class SubscriptionFormComponent {
    @Input()
    public areas: Area[];
    @Output()
    onSubmitted = new EventEmitter<Subscription>();

    public subscription: Subscription;
    
    constructor(){
        this.subscription = new Subscription();
    }

    submitted = false;

    onSubmit() {
        this.submitted=true;
        this.onSubmitted.emit(this.subscription);
    }
}