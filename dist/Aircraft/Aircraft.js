"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aircraft = void 0;
class Aircraft {
    constructor(model, capacity) {
        this.model = model;
        this.capacity = capacity;
        this.model = model;
        this.capacity = capacity;
    }
    fly() {
        console.log(`${this.model} is flying with ${this.capacity} seat`);
    }
}
exports.Aircraft = Aircraft;
