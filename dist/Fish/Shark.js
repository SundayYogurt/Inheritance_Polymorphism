"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shark = void 0;
const Fish_1 = require("./Fish");
class Shark extends Fish_1.Fish {
    bite(fish) {
        console.log(`${this.species} is bite ${fish}`);
    }
}
exports.Shark = Shark;
