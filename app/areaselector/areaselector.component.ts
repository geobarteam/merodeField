import { Component, OnInit } from '@angular/core';
import { Router }      from '@angular/router';

@Component({
  selector: 'my-areaselector',
  templateUrl: 'app/areaselector/areaselector.component.html'
})
export class AreaSelectorComponent implements OnInit {
    
    private verticals = new Array<number>();
    private horizontals = new Array<number>();
  
    constructor(
        private router: Router    ) {
        this.verticals = this.getVerticals();
        this.horizontals = this.getHorizontals();
    }
    
    ngOnInit() {
        
    }
    
    getVerticals():Array<number>{
        var verticals = [];
        for (var i=0;i<32;i++){
            verticals[i-1] = i; 
        }
        return verticals;
    }
   
     getHorizontals():Array<number>{
        var horizontals = [];
        for (var i=0;i<32;i++){
            horizontals[i-1] = i; 
        }
        return horizontals;
    }
   
    
 }
