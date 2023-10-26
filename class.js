class Vehicle {
    constructor(color, model, année) {
        this.color = color;
        this.model = model;
        this.année = année;
    }

    display() {
        console.log(`Model: ${this.model}, Color: ${this.color} Année: ${this.année} `);
    }
}

class Car extends Vehicle {
    constructor(color, model, année) {
        super(color, model, année);
    }

    display() {
        console.log(`La voiture est un model ${this.model}, et de couleur ${this.color} de ${this.année} `);
    }
}

class Motorcycle extends Vehicle {
    constructor(color, model, année) {
        super(color, model, année);
    }

    display() {
        console.log(`La moto est un model ${this.model}, et de couleur ${this.color} de ${this.année} `);
    }
}


const car = new Car("rouge torino", "hyper care", "1998");
const motorcycle = new Motorcycle("vert", "routiére", "2015");

car.display();
motorcycle.display();
