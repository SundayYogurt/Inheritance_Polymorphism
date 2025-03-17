"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Airplane = void 0;
const Aircraft_1 = require("./Aircraft");
class Airplane extends Aircraft_1.Aircraft {
    flapDown() {
        console.log(`${this.model} flapdown`);
    }
}
exports.Airplane = Airplane;
