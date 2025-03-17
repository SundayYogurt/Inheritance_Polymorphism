"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Piano = void 0;
const Instrument_1 = require("./Instrument");
class Piano extends Instrument_1.Instrument {
    pressButton(note) {
        console.log(`${this.name} Press Note ${note}`);
    }
}
exports.Piano = Piano;
