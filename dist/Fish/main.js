"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Dolphin_1 = require("./Dolphin");
const Shark_1 = require("./Shark");
// **************************************
const dol1 = new Dolphin_1.Dolphin("Dolphin");
dol1.swim();
dol1.breed("Shark");
const shark1 = new Shark_1.Shark("Shark");
shark1.swim();
shark1.bite("dolphin");
// **************************************
