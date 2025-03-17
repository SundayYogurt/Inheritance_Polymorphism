"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Refrigerator = void 0;
class Refrigerator {
    constructor(plug) {
        this.plug = plug;
        this.plug = plug;
    }
    turnOn() {
        if (this.plug === true) {
            console.log("Turn On");
        }
        else {
            console.log('Turn Of');
        }
    }
    turnOff() {
        if (this.plug === false) {
            console.log("Turn Of");
        }
        else {
            console.log('Turn On');
        }
    }
}
exports.Refrigerator = Refrigerator;
