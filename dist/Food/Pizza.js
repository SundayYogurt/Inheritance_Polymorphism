"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pizza = void 0;
const Food_1 = require("./Food");
class Pizza extends Food_1.Food {
    addToping(toping) {
        console.log(`เพิ่ม ${toping} to ${this.name}`);
    }
}
exports.Pizza = Pizza;
