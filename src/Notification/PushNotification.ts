import { Notification } from "./Notification";
export class PushNotification implements Notification {
  constructor(private ig:string) {
    this.ig = ig

  }

  send(message: string):void{
    console.log(`${this.ig} is ${message}`)
  }
}
