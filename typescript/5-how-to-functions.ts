// Generic function without a class

import {myKnive} from "./4-how-to-import";

export function mySum(a: number, b: number): number {
    return a + b;
}

// Arrow / Lambda functions

console.log(mySum(5, 6));
export const myFirstArrowFunctionSum: SumFunction = (a: number, b: number): number => a + b;


console.log(myFirstArrowFunctionSum(5, 6));

// Functions as objects

type SumFunction = (a: number, b: number) => number;
const myComposedFunction = (sumFunc: SumFunction, a: number, b: number, c: number) => sumFunc(a, b) + c;

console.log(myComposedFunction(myFirstArrowFunctionSum, 5, 6, 1));

// Function in a class

console.log(myKnive.whatIsMyName());


// Function in a plain object

const mySimpleObject = {
    value: 5,
    mySuperFunction: () => console.log('Indeed'),
    myOtherFunction: function () {
        console.log(this.value);
    }
}
mySimpleObject.mySuperFunction();
mySimpleObject.myOtherFunction();
