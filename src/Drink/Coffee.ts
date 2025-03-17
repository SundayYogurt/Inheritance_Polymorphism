import { Drink } from "./Drink";

export class Coffee extends Drink{

    addShot(add:number):void{
        console.log(`Add ${add} shot to ${this.name}`)
    }
}