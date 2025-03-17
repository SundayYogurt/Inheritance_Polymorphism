"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PushNotification = void 0;
class PushNotification {
    constructor(ig) {
        this.ig = ig;
        this.ig = ig;
    }
    send(message) {
        console.log(`${this.ig} is ${message}`);
    }
}
exports.PushNotification = PushNotification;
