function Car(make, model, year, color, mileage, isElectric) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.mileage = mileage;
    this.isElectric = isElectric;

    
    this.displaySpecs = function() {
        console.log(`--- Car specifications ---`);
        console.log(`Vehicle: ${this.year} ${this.make} ${this.model}`);
        console.log(`Color: ${this.color}`);
        console.log(`Mileage: ${this.mileage} km`);
        console.log(`Engine type: $ {this.isElectric ? "Electric" : "Combustion"}`);
        console.log(`---------------------------`);
    };

}

const myCar = new Car("Toyota", "Corolla", 2024, "Red", 15000, false);
const secondCar = new Car("Hyundai", "Accent", 2018, "Silver", 56000, false);
const dreamCar = new Car("Tesla", "Model 3", 2026, "Blue", 0, true);


myCar.displaySpecs();
secondCar.displaySpecs();
dreamCar.displaySpecs();

// Type your code above this line!

