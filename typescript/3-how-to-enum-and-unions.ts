import {Product, SwordProduct} from "./2-how-to-classes-and-interfaces";

export enum MyFirstEnum {
    A,
    B,
    C
}

export enum MyFirstExplicitEnum {
    A = "A",
    B = "C"
}

const myEnumValue = MyFirstEnum.A;
const mySecondEnumValue = MyFirstExplicitEnum.B;


type MyFirstUnion = MyFirstEnum | MyFirstExplicitEnum;
type MyClassUnion = Product | SwordProduct;

const myFirstUnionValue: MyFirstUnion = 42 > 43 ? myEnumValue : mySecondEnumValue;
