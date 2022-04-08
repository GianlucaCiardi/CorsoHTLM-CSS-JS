interface IRunnable extends IThread{
    run(): IUser;
}

interface IUser{
    username: string;
    password: string;
    email: string;
    enabled?: boolean;

}

interface IThread{
    start(): void;
}

abstract class IRunner{
    
    name: string;
    
    constructor(name: string){
        this.name = name;

    }

    abstract print():void;
    abstract set():void;
}

class IRunnerImpl extends IRunner{
    
    name: string;

    constructor(name: string){
        super(name);
    }
    
    
    print(): void {
        throw new Error("Method not implemented.");
    }
    set(): void {
        throw new Error("Method not implemented.");
    }
    
}

interface IPrinterOut<U, V, T, S extends IRunnable >{
    print(param : U, param1 : V): void;
    start(param1 : U, param2?: V, param3?:T) : S;
}

class PrinterOut implements IPrinterOut<Object, {}, number, IRunnable>{
    print(param: Object, param1: {}): void {
        throw new Error("Method not implemented.");
    }
    start(param1: Object, param2?: {}, param3?: number): IRunnable {
        throw new Error("Method not implemented.");
    }
    
}

type obj=IPrinterOut<Object, {}, number, IRunnable>

declare const globalVar;

