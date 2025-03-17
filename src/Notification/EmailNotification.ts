import { Notification } from "./Notification";
export class EmailNotification implements Notification {
  constructor(private email: string) {
    this.email = email;

  }

  send(message: string):void{
    console.log(`sent notification ${message} to Email: ${this.email} `)
  }
}
