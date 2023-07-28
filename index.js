class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    drive() {
        return `vroom vroom!`;
    }


getDescription() {
    return 'This car is a ${this.make} ${this.model}, built in ${this.year}.';
}
}

class ElectricCar extends Car {
    constructor(make, model, year, range) {
        super(make, model, year);
        this.range = range;
    }

    getDescription() {
        return `${super.getDescription()} It also has a range of ${this.range} miles.`
}

    drive() {
        return `zoop zoop`
    }
}

const carTesla = new ElectricCar(`Tesla`, `Model S`, 2019, 300)

console.log(carTesla)
console.log(carTesla instanceof Car)
console.log(carTesla instanceof ElectricCar)
console.log(carTesla.drive())
