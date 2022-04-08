import { Square } from "./Square";
import { Rectangle } from "./Rectangle";
import { Triangle } from "./Triangle";


class Math{

    
    width: number;
    height: number;


    constructor(){}


    public squareArea(square : Square) : number{
       
       this.width = square.getWidth();
        return this.width*this.width;
    }

    public rectangleArea(rect : Rectangle) : number{
        this.width = rect.getWidth();
        this.height = rect.getHeight();
        return this.width*this.height;
    }

    public triangleArea(tr : Triangle) : number{
        this.width = tr.getWidth();
        this.height = tr.getHeight();
        return (this.width*this.height) /2;
    }

}