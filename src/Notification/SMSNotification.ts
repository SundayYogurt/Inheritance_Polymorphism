import { Notification } from "./Notification";
export class SMSNotification implements Notification {
  constructor(private phone: string) {
    this.phone = phone

  }

  send(message: string):void{
    console.log(`SMS Sent | ${message} to ${this.phone}`)
  }
}
