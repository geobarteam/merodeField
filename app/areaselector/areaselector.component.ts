import { Component, OnInit } from '@angular/core';
import { Router }      from '@angular/router';
import { Area } from './area';

@Component({
  selector: 'my-areaselector',
  templateUrl: 'app/areaselector/areaselector.component.html'
})
export class AreaSelectorComponent implements OnInit {
    
    rowsCount = 36;
    colCount = 25;

    private rowNumbers = new Array<number>();
    private colNumbers = new Array<number>();
    private field: Area[][];
  
    constructor(
        private router: Router    ) {
        this.rowNumbers = this.getRowNumbers();
        this.colNumbers = this.getColNumbers();
        this.field = [];
        this.colNumbers.forEach((col)=>{
            this.field[col] = [];
            this.rowNumbers.forEach((row)=>{
                this.field[col][row] = new Area();
            });
        });
        
    }
    
    ngOnInit() {
        
    }
    
    getRowNumbers():Array<number>{
        return this.getRepeatArray(this.colCount);
    }
   
     getColNumbers():Array<number>{
        return this.getRepeatArray(this.rowsCount);
    }

    select(area:Area){
        area.selected = true;
    }

    getRepeatArray(repeatTimes:number):Array<number>{
        var items = [];
        for (var i=0;i<repeatTimes;i++){
            items[i] = i+1; 
        }
        return items;
    } 
   
    
 }
