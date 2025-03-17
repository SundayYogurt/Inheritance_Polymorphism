export class Food {
    constructor (protected name:string) {
        this.name = name
        
    }

    serve(count:number){
       console.log( `${this.name} serving ${count} piece`)
    }
}