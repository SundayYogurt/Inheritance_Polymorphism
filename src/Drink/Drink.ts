export class Drink{
    constructor(protected name:string){
        this.name = name
    }
    
    public serve(drink:number){
        console.log(`${this.name} serving ${drink} cup`)
    }
}