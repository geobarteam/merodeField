export class Area{
    selected:boolean;
}

export class Field{
    
    public Areas: Area[][];
    public rowNumbers:Array<number>;
    public colNumbers:Array<number>;

    constructor(private colCount:number, 
                private rowCount:number) {
        this.rowNumbers = this.getRepeatArray(this.rowCount);
        this.colNumbers = this.getRepeatArray(this.colCount);
        this.initializeAreas();    
    }

    initializeAreas(){
        this.Areas = [];
        this.colNumbers.forEach((col)=>{
        this.Areas[col] = [];
            this.rowNumbers.forEach((row)=>{
                this.Areas[col][row] = new Area();
            });
        });
    }

    selectArea(x:number,y:number){
        this.Areas[x][y].selected = !this.Areas[x][y].selected;
    }

    getRepeatArray(repeatTimes:number):Array<number>{
        var items = [];
        for (var i=0;i<repeatTimes;i++){
            items[i] = i+1; 
        }
        return items;
    } 
   
}