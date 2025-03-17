"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Juice = void 0;
const Drink_1 = require("./Drink");
class Juice extends Drink_1.Drink {
    moreSweet(add) {
        console.log(`Add ${add} % sugar to ${this.name}`);
    }
}
exports.Juice = Juice;
