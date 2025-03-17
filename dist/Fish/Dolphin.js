"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dolphin = void 0;
const Fish_1 = require("./Fish");
class Dolphin extends Fish_1.Fish {
    breed(fish) {
        console.log(`${this.species} breed to male ${fish}`);
    }
}
exports.Dolphin = Dolphin;
