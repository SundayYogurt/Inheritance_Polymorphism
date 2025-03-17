import { Food } from "./Food";

export class Pizza extends Food{

    addToping(toping:string):void{
        console.log(`เพิ่ม ${toping} to ${this.name}`)
    }
}