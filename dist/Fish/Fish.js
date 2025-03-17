"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fish = void 0;
class Fish {
    constructor(species) {
        this.species = species;
    }
    swim() {
        console.log(`${this.species} is swiming`);
    }
}
exports.Fish = Fish;
