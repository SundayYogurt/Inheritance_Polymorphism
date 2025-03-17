import { Fish } from "./Fish";

export class Dolphin extends Fish{ 



    public breed(fish:string):void{
        console.log(`${this.species} breed to male ${fish}`)
    }

}