interface NamedPet {
    firstName: string;
    age?: number;
    [propName: string]: any;
    greet(lastName: string): void;
}

function greet(pet:NamedPet) {
    console.log(`Hello ${pet.firstName}`);
}

let pet: NamedPet = {
    firstName: 'Oreo',
    age: 1,
    greet(lastName:string):void {
        console.log(`Meow, my name is ${this.firstName} ${lastName}`);
    }
}

greet(pet);

// Classes
class Pet implements NamedPet {
    firstName: string;
    greet(lastName: string): void {
        console.log(`Meow, my name is ${this.firstName} ${lastName}`);
    }
    anotherMethod() {
        console.log('nothing');
    }
}

// There is a lot more like Generics, interface inheritance, namespaces and modules...