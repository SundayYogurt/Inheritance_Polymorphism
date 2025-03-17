import { Appliance } from "./Appliance";

export class Refrigerator implements Appliance{
    constructor(private plug:boolean){
        this.plug = plug
    }

    turnOn():void{
        if(this.plug === true){
            console.log("Turn On")
        }else{
            console.log('Turn Of')
        }
    }
    turnOff():void{
        if(this.plug === false){
            console.log("Turn Of")
        }else{
            console.log('Turn On')
        }
    }
}