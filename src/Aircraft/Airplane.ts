import { Aircraft } from "./Aircraft";

export class Airplane extends Aircraft{

    flapDown(){
        console.log(`${this.model} flapdown`)
    }

}