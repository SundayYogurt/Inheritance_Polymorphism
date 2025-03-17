import { Appliance } from "./Appliance";

export class WashingMachine implements Appliance{
    constructor(private pushWater:boolean,private mode:string, private pressButton:boolean, private time:number){
        this.pushWater = pushWater
        this.mode = mode
        this.pressButton = pressButton
        this.time = time
    }

    turnOn(empty:boolean):void{
        if(!empty){
             console.log(`select ${this.mode} water is empty ${this.pushWater} Button ${this.pressButton} Time ${this.time}`)
        }else{
            console.log("Still Off")
        }
    }

    turnOff(empty:boolean):void{
        if(empty){
            console.log(`turn Off power button was ${this.pressButton}`)
        }else{
             console.log(`select ${this.mode} water must be empty Button ${this.pressButton} Time ${this.time} นาที`)
        }
    }
}