export class Aircraft {
    constructor(protected model:string, protected capacity:number){
        this.model = model
        this.capacity = capacity
    }

    public fly():void{
        console.log(`${this.model} is flying with ${this.capacity} seat`)
    }
}