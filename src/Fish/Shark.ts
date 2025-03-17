
import { Dolphin } from "./Dolphin";
import { Fish } from "./Fish";

export class Shark extends Fish{ 
    
     public bite(fish:string){
        console.log(`${this.species} is bite ${fish}`)
    }

    
}