import { Component, OnInit } from '@angular/core';
import { Router }      from '@angular/router';
import { Field, Area } from './field';

@Component({
  selector: 'my-areaselector',
  templateUrl: 'app/areaselector/areaselector.component.html'
})
export class AreaSelectorComponent implements OnInit {
    
    rowCount = 36;
    colCount = 25;

    public field: Field;
  
    constructor(
        private router: Router    ) {
        this.field = new Field(this.colCount, this.rowCount);

    }
    
    ngOnInit() {
    }    
 }
