/*class Pet {
  constructor(animal, breed, color, name, nickname, age) {
    this.animal = animal;
    this.breed = breed;
    this.color = color;
    this.name = name;
    this.nickname = nickname;
    this.age = age;
  }
  changeAnimal(newAnimal) {
    this.animal = newAnimal;
  }
  set color(value) {
    const colors = ["white", "black", "ginger", "grey", "multicolored"];
    if (colors.includes(value)) {
      this._color = value;
    } else {
      throw RangeError("Unsupported color");
    }
  }

  render() {
    document.write(`
       <article> 
         <h2>Animal: ${this.animal} <h2>
         <p>Breed: ${this.breed} <p>
         <p>Color: ${this._color} <p>
         <p>Name: ${this.name} <p>
         <p>Nickname: ${this.nickname} <p>
         <p>Age: ${this.age} <p>
       </article>  
        `);
  }
}

try {
  const pet = new Pet("cat", "british", "ginger", "Marseilles", "Masya", "4");
  console.log(pet);
  pet.render();
  pet.color = "ginger";
  pet.changeAnimal("dog");
  console.log("pet", pet);
} catch (err) {
  console.log("err", err);
  console.log("pet2", pet2);
}


class RangeValidator {
  constructor(from, to) {
    this.from = from;
    this.to = to;
  }

  isValid(number) {
    if (number >= this.from && number <= this.to) return true;
    else {
      return false;
    }
  }

  set from(value) {
    if (typeof value !== "number" || isNaN(value)) {
      throw new TypeError("Параметр from повинен бути числом");
    }
    if (value > this.to) {
      throw new RangeError("число не повинно бути менше this.to");
    }
    this._from = value;
  }

  get from() {
    return this._from;
  }

  set to(value) {
    if (typeof value !== "number" || isNaN(value)) {
      throw new TypeError("Параметр to повинен бути числом");
    }
    if (value < this.from) {
      throw new RangeError("число не повинно бути менше this.from");
    }
    this._to = value;
  }

  get to() {
    return this._to;
  }
}
try {
  const age = new RangeValidator(0, 100);
  console.log("age", age);
  console.log("isValid()", age.isValid(11));
  age.from = 150;
  console.log("age", age);
} catch (err) {
  console.log("err", err);
}
*/
class Vehicle {
  constructor(brand, model, manufactureDate) {
    this._brand = brand;
    this._model = model;
    this._manufactureDate = manufactureDate;
  }
  getFullinfo() {
    return `${this._brand},${this._model},${this._manufactureDate}`;
  }
  getAge() {
    return new Date().getFullYear() - this._manufactureDate;
  }
}

const vehicle1 = new Vehicle("Mersedes", "clas-B", 1950);

class PassengerTransport extends Vehicle {
  constructor(brand, model, manufactureDate, passengerLimit, passengerCount) {
    super(brand, model, manufactureDate);
    this._passengerLimit = passengerLimit;
    this._passengerCount = passengerCount;
  }
  addPassenger(value) {
    if (this._passengerLimit > this._passengerCount) {
      this._passengerCount++;
      return true;
    } else {
      return false;
    }
  }
  getFullinfo() {
    return `${super.getFullinfo()},${this._passengerLimit}`;
  }
}

const vehicleBus = new PassengerTransport(
  "Mercedes-Benz",
  "W206",
  2022,
  25,
  20
);

/*console.log(VehicleBus.getFullinfo());
console.log(VehicleBus.addPassenger());
console.log(VehicleBus.getAge());
console.log(Vehicle1.getAge());
*/

class FreightTransport extends Vehicle {
  constructor(brand, model, manufactureDate, capacity) {
    super(brand, model, manufactureDate);
    this._capacity = capacity;
  }
  checkLoadingPossibility(weight) {
    return weight <= this._capacity;
  }
  getFullinfo() {
    return `${super.getFullinfo()},${this._capacity}`;
  }
}
const vehicle3 = new FreightTransport("Lambargini", "L3", 1930, 1000);
console.log(vehicle3);
console.log(vehicle3.checkLoadingPossibility(800));
console.log(vehicle3.getFullinfo());
