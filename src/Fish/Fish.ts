export class Fish {
    protected species: string;
    constructor(species: string) {
        this.species = species
    }

    public swim():void{
          console.log(`${this.species} is swiming`)
    }

}