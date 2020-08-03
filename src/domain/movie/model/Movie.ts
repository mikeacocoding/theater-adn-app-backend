export default class Movie {
    private id : string;
    private name : string;

    constructor(id: string, name: string){
        this.id = id;
        this.name = name;
    }

    public getId(){
        return this.id;
    }
    public setId(id: string) {
        this.id = id;
    }

    public getName(){
        return this.name;
    }
    public setName(name: string) {
        this.name = name;
    }
}