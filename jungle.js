class Animal {
  static remainingAnimals = 0;

  constructor(name, species) {
    this.name = name;
    this.species = species;
    this.energy = 100;
    Animal.remainingAnimals++;
  }

  attack(target) {
    if (this.energy >= 20) {
      console.log(`${this.name} attacks ${target.name}!`);
      this.energy -= 20;
    } else {
      console.log(`${this.name} does not have enough energy to attack.`);
    }
  }

  eat() {
    this.energy += 10;
    console.log(`${this.name} is eating. Energy level: ${this.energy}`);
  }
}

class Bird extends Animal {
  constructor(name, species, canFly) {
    super(name, species);
    this.canFly = canFly;
  }
}

class Mammal extends Animal {
  constructor(name, species, furColor) {
    super(name, species);
    this.furColor = furColor;
  }
}

class Reptile extends Animal {
  constructor(name, species, coldBlooded) {
    super(name, species);
    this.coldBlooded = coldBlooded;
  }
}


// DRIVER CODE: Create instances of the subclasses and use their properties and methods. You can modify this to add more attacks and eating actions.

const eagle = new Bird("Eagle", "Bird of Prey", true);
console.log(`Name: ${eagle.name}, Species: ${eagle.species}, Can Fly: ${eagle.canFly}`);

const lion = new Mammal("Lion", "Big Cat", "Golden");
console.log(`Name: ${lion.name}, Species: ${lion.species}, Fur Color: ${lion.furColor}`);

const snake = new Reptile("Snake", "Serpent", true);
console.log(`Name: ${snake.name}, Species: ${snake.species}, Cold-Blooded: ${snake.coldBlooded}`);

// Example attack
console.log("\n--- Attacks ---");
eagle.attack(lion);
lion.attack(snake);

// Display the remaining number of animals with energy
console.log(`Remaining animals with energy: ${Animal.remainingAnimals}`);

// Example eating
console.log("\n--- Eating ---");
eagle.eat();
lion.eat();
snake.eat();
