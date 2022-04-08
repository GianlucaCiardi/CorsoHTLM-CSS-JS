import { FIGURE } from "./FIGURE";

// @ts-ignore
class Square{
    figure: FIGURE;
    width: number;

    constructor(width:number){
        this.figure = FIGURE.SQUARE
        this.width = width;
    }

    public getFigure():FIGURE{
        return this.figure;
    }

    public getWidth() : number{
        return this.width;
    }
}

export {Square};