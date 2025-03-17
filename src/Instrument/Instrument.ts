export class Instrument {
    constructor(protected name:string){
        this.name = name
    }

    play(sound:string):void{
        console.log(`${this.name} Note ${sound}`)
    }
}