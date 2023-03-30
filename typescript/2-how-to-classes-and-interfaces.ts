export interface IProduct {
    cost: number;
    name: string;
}

export class Product implements IProduct {
    cost: number;
    name: string;

    constructor(cost: number, name: string) {
        this.cost = cost;
        this.name = name;
    }

    whatIsMyName(): string {
        return this.name;
    }
}

export class SwordProduct extends Product {
    damage: number;


    constructor(cost: number, name: string, damage: number) {
        super(cost, name);
        this.damage = damage;
    }


    whatIsMyName(): string {
        return "Sword " + super.whatIsMyName();
    }
}
