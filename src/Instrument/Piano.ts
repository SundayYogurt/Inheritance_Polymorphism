import { Instrument } from "./Instrument";

export class Piano extends Instrument{

    pressButton(note:string){
        console.log(`${this.name} Press Note ${note}`)
    }
}