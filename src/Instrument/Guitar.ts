import { Instrument } from "./Instrument";

export class Guitar extends Instrument{

    adjustTremoloArm(note:string){
        console.log(`${this.name} Note ${note}`)
    }
}