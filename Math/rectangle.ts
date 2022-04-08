import { FIGURE } from "./FIGURE";

// @ts-ignore
class Rectangle{
    figure: FIGURE;
    width: number;
    height: number;

    constructor(width:number, height:number){
        this.figure = FIGURE.RECTANGLE
        this.width = width;
        this.height = height;
    }

    public getFigure():FIGURE{
        return this.figure;
    }

    public getWidth() : number{
        return this.width;
    }

    public getHeight() : number{
        return this.height;
    }
}

export {Rectangle};