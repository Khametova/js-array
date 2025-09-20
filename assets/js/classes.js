class Pet {
  constructor(animal, breed, color, name, nickname, age) {
    this.animal = animal;
    this.breed = breed;
    this.color = color;
    this.name = name;
    this.nickname = nickname;
    this.age = age;
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
} catch (err) {
  console.log("err", err);
}
