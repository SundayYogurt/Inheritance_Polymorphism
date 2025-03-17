import { Drink } from "./Drink";

export class Juice extends Drink{

    moreSweet(add:number):void{
        console.log(`Add ${add} % sugar to ${this.name}`)
    }
}