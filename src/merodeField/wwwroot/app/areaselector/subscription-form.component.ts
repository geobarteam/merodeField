import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Field, FieldArea, Subscription, SubscriptionArea } from './model';
import { SubscriptionService } from '../services/subscription.service';

@Component({
    selector: 'subscription-form',
    templateUrl: 'app/areaselector/subscription-form.component.html'
})
export class SubscriptionFormComponent {
    @Input()
    public areas: FieldArea[];
    @Output()
    onSubmitted = new EventEmitter<Subscription>();
    public subscription: Subscription;
    constructor(
        private subscriptionService: SubscriptionService
        ) {
            this.subscription = new Subscription();
    }

    submitted = false;

    onSubmit() {
        this.areas.forEach(area => {
            this.subscription.areas.push(new SubscriptionArea(area.position, area.charachter));
        });

        this.subscriptionService.addSubscription(this.subscription)
            .then(
                result => {
                    this.onSubmitted.emit(result);
                    this.submitted = true;
                },
                error => console.error(error));
    }
}