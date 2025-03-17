"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Coffee = void 0;
const Drink_1 = require("./Drink");
class Coffee extends Drink_1.Drink {
    addShot(add) {
        console.log(`Add ${add} shot to ${this.name}`);
    }
}
exports.Coffee = Coffee;
