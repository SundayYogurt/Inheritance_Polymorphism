"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SMSNotification = void 0;
class SMSNotification {
    constructor(phone) {
        this.phone = phone;
        this.phone = phone;
    }
    send(message) {
        console.log(`SMS Sent | ${message} to ${this.phone}`);
    }
}
exports.SMSNotification = SMSNotification;
