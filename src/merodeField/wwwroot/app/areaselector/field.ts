export class Area{
    selected: boolean;
    constructor(
        public positionX: number,
        public positionY: number
    ){}
    charachter = "";
    
}

export class Field{
    
    public areas: Area[][];
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
                this.areas[col][row] = new Area(col,row);
            });
        });
    }

    selectArea(x:number,y:number){
        this.areas[x][y].selected = !this.areas[x][y].selected;
    }

    selectedAreas():Area[] {
        var filetered = Array<Area>();
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