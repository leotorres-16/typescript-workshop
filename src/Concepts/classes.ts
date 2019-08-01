// Properties are public by default
// Both Properties and Methods can be public, private or protected
class Person {
    name: string;
    private type: string;
    protected age: number = 29;

    // public username: string -> shortcut for prop and setup
    constructor(name: string, public username: string) {
        this.name = name;
    }

    printAge() : void {
        console.log(this.age);
    }

    setType(type:string) : void {
        this.type = type;
        console.log(this.type);
    }
}

const person = new Person('Leo', 'leotorres');

//Inheritance
class Leo extends Person {
    constructor(username: string) {
        super('Leo', username);
        this.age = 30;
    }
}

const leo = new Leo('leotorres2');

// Getters and Setters
class Plant {
    private _species: string = 'Default';

    get species() {
        return this.species;
    }

    set species(value: string) {
        if(value.length > 3) {
            this._species = value;
        } else {
            this._species = 'Default';
        }
    }
}

let plant = new Plant();
plant.species = 'Pika plant';

// Static props and methods
class Helpers {
    static PI: number = 3.14;

}

console.log(Helpers.PI);

// Abstract classes
abstract class Project {
    projectName: string;
    budget: number;

    abstract changeName(name:string): void;

    calcBudget(): number{
        return this.budget * 2;
    }
}

class ITProject extends Project {
    changeName(name:string): void {
        this.projectName = name;
    }
}

let newProject = new ITProject();
newProject.changeName('Super project');