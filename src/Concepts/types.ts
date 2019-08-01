// Key: We can be explicit about types
let myName = 'Leo';
// myName = 2;

// number
let myAge = 29.10;

// boolean
let hasHobbies = true;
// hasHobbied = 1;

// Explicit types
let myRealAge: number; // This is type any by default
myRealAge = 29;
// myRealAge = '29';

// Array
let hobbies = ["Cooking", "Reading"];
console.log(typeof hobbies);

// Tuples
let address: [string, number] = ["Superstreet", 99];

// Enums: make numbers more expressive
enum Color {
    Red,
    Blue,
    Yellow // Yes is the original pokemon colors :D
}
let myColor: Color = Color.Red;
console.log(myColor);

// Type any removes all the advantages from TS :)

// Functions
function returnMyName(): string {
    return myName;
}

// void -> no return
function printMyName(): void {
    console.log('Hello');
}

// arguments
function multiply(value1:number, value2:number): number {
    return value1 * value2;
}
console.log(multiply(1,2));

// function types
let myMultiply: (val1:number, val2:number) => number;
// myMultiply = printMyName;
myMultiply = multiply;

// objects
let userData: { name:string, age:number} = {
    name: 'Leo',
    age: 29
}

let complex: {data: number[], output: (all:boolean) => number[]} = {
    data: [100,3.99,10],
    output: function (all: boolean): number[] {
        return this.data;
    }
}

// type alias or custom type
type Complex = {
    data: number[], 
    output: (all:boolean) => number[]
};

let complex2: Complex = {
    data: [100,3.99,10],
    output: function (all: boolean): number[] {
        return this.data;
    }
}

// Union types
let union : number | string = 1;
union = 'Hello';

// Check types -> You compare using just == not ===
let finalValue = 30;
if(typeof finalValue == "number") {
    console.log('Is a number')
}

// never type => used when a function return an error
function neverReturns():never {
    throw new Error('An error!');
}