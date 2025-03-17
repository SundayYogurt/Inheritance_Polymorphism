"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Helicopter = void 0;
const Aircraft_1 = require("./Aircraft");
class Helicopter extends Aircraft_1.Aircraft {
    verticalLanding() {
        console.log(`${this.model} is VerticalLanding`);
    }
}
exports.Helicopter = Helicopter;
