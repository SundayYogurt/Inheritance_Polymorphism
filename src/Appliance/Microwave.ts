import { Appliance } from "./Appliance";

export class Microwave implements Appliance{
    constructor(private insert:boolean ){
        this.insert = insert
    }

    turnOn():void{
        if(this.insert){
            console.log(`TURN ON! ใส่อาหารใน microwave แล้ว `)
        }else{
            console.log(`ไม่ได้ใส่ ${this.insert} ใน mirowave`)
        }
    }
    turnOff():void{
        if(!this.insert){
            console.log(`TURN OF! นำอาหาร ออกจาก microwave แล้ว `)
        }else{
            console.log(`TURN ON! อาหาร ยังอยู่ใน ใน mirowave`)
        }
    }
}