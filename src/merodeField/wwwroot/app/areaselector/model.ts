export class Position {
    constructor(
        public x: number,
        public y: number
    ) { }

    equal(position: Position): boolean {
        return position.x === this.x && position.y === this.y;
    }
}

export class FieldArea{
    selected: boolean;
    constructor(
        public position:Position
    ){}
    charachter = "";
    
}

export class Field{
    
    public areas: FieldArea[][];
    public rowNumbers:Array<number>;
    public colNumbers:Array<number>;

    constructor(private colCount:number, 
                private rowCount:number) {
        this.rowNumbers = this.getRepeatArray(this.rowCount);
        this.colNumbers = this.getRepeatArray(this.colCount);
        this.initializeAreas();    
    }

    initializeAreas(){
        this.areas = [];
        this.colNumbers.forEach((col)=>{
        this.areas[col] = [];
            this.rowNumbers.forEach((row)=>{
                this.areas[col][row] = new FieldArea(new Position(col,row));
            });
        });
    }

    selectFieldArea(x:number,y:number){
        this.areas[x][y].selected = !this.areas[x][y].selected;
    }

    selectedFieldAreas():FieldArea[] {
        var filetered = Array<FieldArea>();
        this.areas.forEach(row=>row.forEach(col => {
            if (col.selected) {
                filetered.push(col);
            }
        }));
        return filetered;
    }

    getRepeatArray(repeatTimes:number):Array<number>{
        var items = [];
        for (var i=0;i<repeatTimes;i++){
            items[i] = i+1; 
        }
        return items;
    } 
   
}


export class SubscriptionArea {
    constructor(
        public position: Position,
        public char: string
    ) { }
}

export class Subscription {

    constructor() {
        this.areas = new Array<SubscriptionArea>();
    }
    public id: string;
    public email: string;
    public firstName: string;
    public lastName: string;
    public areas: SubscriptionArea[];
}