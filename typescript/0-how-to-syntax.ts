// Variables

const x = 5;
// x=6 not allowed
let y = 6;
y = 7;
var z = "deprecated";

// Conditionals

if (x < y) {
    console.log('Indeed');
}
const w: string = x < y ? "something" : "else";  // type is inferred, replace with string

// Loops
const myArray = [1, 2.678, 3, 4, 5];
for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i], i);
}
for (let elem of myArray) {
    console.log(elem);
}
let whileVar = 0;
while (whileVar < 3) {
    whileVar++;
    if (whileVar == 2) {
        break;
    }
}

// Object Types

const myPlainObject = {
    mySpecialKey: "heart",
    myNestedThingy: {
        myArray: [1, 2, 3]
    }
}
myPlainObject.mySpecialKey = "typescript";


// ES6 Important Syntax: Rest Parameter and Spread Operator

const myDictionary = {val1: 5, val2: 6, val3: 7};
const {val1, val2, val3} = myDictionary;
console.log(val3);

const newMyDictionary = {...myDictionary, val3: 8, val4: 5}
console.log(newMyDictionary);

const myEs6Array = [{head: "23"}, 1, 2, 3, 4, 5];
const [headEs6, rest] = myEs6Array;
console.log(headEs6, rest);
