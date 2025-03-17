"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Microwave = void 0;
class Microwave {
    constructor(insert) {
        this.insert = insert;
        this.insert = insert;
    }
    turnOn() {
        if (this.insert) {
            console.log(`TURN ON! ใส่อาหารใน microwave แล้ว `);
        }
        else {
            console.log(`ไม่ได้ใส่ ${this.insert} ใน mirowave`);
        }
    }
    turnOff() {
        if (!this.insert) {
            console.log(`TURN OF! นำอาหาร ออกจาก microwave แล้ว `);
        }
        else {
            console.log(`TURN ON! อาหาร ยังอยู่ใน ใน mirowave`);
        }
    }
}
exports.Microwave = Microwave;
