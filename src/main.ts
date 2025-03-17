import { Airplane } from "./Aircraft/Airplane";
import { Helicopter } from "./Aircraft/Helicopter";
import { Microwave } from "./Appliance/Microwave";
import { Refrigerator } from "./Appliance/Refrigerator";
import { WashingMachine } from "./Appliance/WashingMachine";
import { Coffee } from "./Drink/Coffee";
import { Juice } from "./Drink/Juice";
import { Dolphin } from "./Fish/Dolphin";
import { Shark } from "./Fish/Shark";
import { Pizza } from "./Food/Pizza";
import { Sushi } from "./Food/Sushi";
import { Guitar } from "./Instrument/Guitar";
import { Piano } from "./Instrument/Piano"
import { EmailNotification } from "./Notification/EmailNotification";
import { PushNotification } from "./Notification/PushNotification";
import { SMSNotification } from "./Notification/SMSNotification";

console.log("************************************** inheritance **************************************")
console.log()
console.log("************************************** Dolphin **************************************")
const dol1 = new Dolphin("Dolphin")
dol1.swim()
dol1.breed("Shark")

console.log("************************************** Shark **************************************")
const shark1 = new Shark("Shark")
shark1.swim()
shark1.bite("dolphin")

console.log("************************************** Drink **************************************")
console.log()
console.log("************************************** Coffee **************************************")
const cof1 = new Coffee("Latte")

cof1.serve(1)
cof1.addShot(20)

console.log("************************************** Juice **************************************")

const juice1 = new Juice("melon")
juice1.serve(2)
juice1.moreSweet(10)

console.log("************************************** Drink **************************************")
console.log()
console.log("************************************** Aircraft **************************************")
console.log()
console.log("************************************** Airplane **************************************")
const airplane1 = new Airplane("Boing788",120)

airplane1.fly()
airplane1.flapDown()

console.log("************************************** Helicopter **************************************")

const heli1 = new Helicopter("shinuk",30)
heli1.fly()
heli1.verticalLanding()

const guitar1 = new Guitar("Fender")
guitar1.play("A")
guitar1.adjustTremoloArm("G")

const piano1 = new Piano("YAMAHA")
piano1.play("B")
piano1.pressButton("C")


const pizza1 = new Pizza("Hawaiian")
pizza1.serve(1)
pizza1.addToping("Cheese")

const sushi1 = new Sushi("Salmon-Sushi")
sushi1.serve(20)
sushi1.mold(100)

console.log("************************************** inheritance **************************************")

console.log("************************************** Polymorphism **************************************")
console.log("************************************** Email **************************************")

const email = new EmailNotification("Topza22@gmail.com")
email.send("To day is Monday")

console.log("************************************** SMS **************************************")

const phonenum = new SMSNotification("098-xxx-xxxx")
phonenum.send("DTAC bill 595 bath PLEASE PAY!")

console.log("************************************** PUSH **************************************")

const push = new PushNotification("SPD999")
push.send("Followed you")
push.send("like you")

console.log("************************************** Polymorphism **************************************")

const refrigerator = new Refrigerator(true)
refrigerator.turnOn()

const wash = new WashingMachine(true,"default",true,30)
wash.turnOn(false)
wash.turnOff(true)

const micro = new Microwave(true)
micro.turnOn()
micro.turnOff()
