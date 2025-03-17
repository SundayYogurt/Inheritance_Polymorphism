"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailNotification = void 0;
class EmailNotification {
    constructor(email) {
        this.email = email;
        this.email = email;
    }
    send(message) {
        console.log(`sent notification ${message} to Email: ${this.email} `);
    }
}
exports.EmailNotification = EmailNotification;
