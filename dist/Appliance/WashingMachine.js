"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WashingMachine = void 0;
class WashingMachine {
    constructor(pushWater, mode, pressButton, time) {
        this.pushWater = pushWater;
        this.mode = mode;
        this.pressButton = pressButton;
        this.time = time;
        this.pushWater = pushWater;
        this.mode = mode;
        this.pressButton = pressButton;
        this.time = time;
    }
    turnOn(empty) {
        if (!empty) {
            console.log(`select ${this.mode} water is empty ${this.pushWater} Button ${this.pressButton} Time ${this.time}`);
        }
        else {
            console.log("Still Off");
        }
    }
    turnOff(empty) {
        if (empty) {
            console.log(`turn Off power button was ${this.pressButton}`);
        }
        else {
            console.log(`select ${this.mode} water must be empty Button ${this.pressButton} Time ${this.time} นาที`);
        }
    }
}
exports.WashingMachine = WashingMachine;
