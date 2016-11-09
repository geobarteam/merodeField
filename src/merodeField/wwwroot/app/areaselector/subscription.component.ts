import { Component, Input } from '@angular/core';
import { Subscription } from './subscription';
import { Field, Area } from './field';

@Component({
    selector: 'subscription-component',
    template: `<p>You selected: {{areas}}</p>`
})
export class SubscriptionComponent {
    @Input()
    public areas: Area[];
}