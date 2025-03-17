import { Aircraft } from "./Aircraft";

export class Helicopter extends Aircraft{

    verticalLanding(){
        console.log(`${this.model} is VerticalLanding`)
    }

}