import { Component, OnInit } from '@angular/core';
import { Router }      from '@angular/router';
import { Field, FieldArea, Subscription } from './model';


@Component({
  selector: 'my-areaselector',
  templateUrl: 'app/areaselector/areaselector.component.html'
})
export class AreaSelectorComponent implements OnInit {
    
    rowCount = 36;
    colCount = 25;

    public field: Field;
    submitted = false;
    subscription:Subscription;

    constructor(
        private router: Router    ) {
        this.field = new Field(this.colCount, this.rowCount);

    }
    
    ngOnInit() {
    }  

    onKey(value:string, area:FieldArea) {
        area.charachter = value.toUpperCase();
    }  

    onSubmitted(subscription: Subscription) {
        this.submitted = true;
        this.subscription = subscription;
    }
 }
