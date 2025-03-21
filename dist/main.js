"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Airplane_1 = require("./Aircraft/Airplane");
const Helicopter_1 = require("./Aircraft/Helicopter");
const Microwave_1 = require("./Appliance/Microwave");
const Refrigerator_1 = require("./Appliance/Refrigerator");
const WashingMachine_1 = require("./Appliance/WashingMachine");
const Coffee_1 = require("./Drink/Coffee");
const Juice_1 = require("./Drink/Juice");
const Dolphin_1 = require("./Fish/Dolphin");
const Shark_1 = require("./Fish/Shark");
const Pizza_1 = require("./Food/Pizza");
const Sushi_1 = require("./Food/Sushi");
const Guitar_1 = require("./Instrument/Guitar");
const Piano_1 = require("./Instrument/Piano");
const EmailNotification_1 = require("./Notification/EmailNotification");
const PushNotification_1 = require("./Notification/PushNotification");
const SMSNotification_1 = require("./Notification/SMSNotification");
console.log("************************************** inheritance **************************************");
console.log();
console.log("************************************** Dolphin **************************************");
const dol1 = new Dolphin_1.Dolphin("Dolphin");
dol1.swim();
dol1.breed("Shark");
console.log("************************************** Shark **************************************");
const shark1 = new Shark_1.Shark("Shark");
shark1.swim();
shark1.bite("dolphin");
console.log("************************************** Drink **************************************");
console.log();
console.log("************************************** Coffee **************************************");
const cof1 = new Coffee_1.Coffee("Latte");
cof1.serve(1);
cof1.addShot(20);
console.log("************************************** Juice **************************************");
const juice1 = new Juice_1.Juice("melon");
juice1.serve(2);
juice1.moreSweet(10);
console.log("************************************** Drink **************************************");
console.log();
console.log("************************************** Aircraft **************************************");
console.log();
console.log("************************************** Airplane **************************************");
const airplane1 = new Airplane_1.Airplane("Boing788", 120);
airplane1.fly();
airplane1.flapDown();
console.log("************************************** Helicopter **************************************");
const heli1 = new Helicopter_1.Helicopter("shinuk", 30);
heli1.fly();
heli1.verticalLanding();
const guitar1 = new Guitar_1.Guitar("Fender");
guitar1.play("A");
guitar1.adjustTremoloArm("G");
const piano1 = new Piano_1.Piano("YAMAHA");
piano1.play("B");
piano1.pressButton("C");
const pizza1 = new Pizza_1.Pizza("Hawaiian");
pizza1.serve(1);
pizza1.addToping("Cheese");
const sushi1 = new Sushi_1.Sushi("Salmon-Sushi");
sushi1.serve(20);
sushi1.mold(100);
console.log("************************************** inheritance **************************************");
console.log("************************************** Polymorphism **************************************");
console.log("************************************** Email **************************************");
const email = new EmailNotification_1.EmailNotification("Topza22@gmail.com");
email.send("To day is Monday");
console.log("************************************** SMS **************************************");
const phonenum = new SMSNotification_1.SMSNotification("098-xxx-xxxx");
phonenum.send("DTAC bill 595 bath PLEASE PAY!");
console.log("************************************** PUSH **************************************");
const push = new PushNotification_1.PushNotification("SPD999");
push.send("Followed you");
push.send("like you");
console.log("************************************** Polymorphism **************************************");
const refrigerator = new Refrigerator_1.Refrigerator(true);
refrigerator.turnOn();
const wash = new WashingMachine_1.WashingMachine(true, "default", true, 30);
wash.turnOn(false);
wash.turnOff(true);
const micro = new Microwave_1.Microwave(true);
micro.turnOn();
micro.turnOff();
