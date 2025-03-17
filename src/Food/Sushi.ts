import { Food } from "./Food";

export class Sushi extends Food{

    mold(amount:number):void{
        console.log(`${this.name} mold ${amount} times` )
    }
}