'use strict';

class Animal {
  // write your code here
  static alive = [];

  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  // write your code here
  constructor(name) {
    super(name);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  // write your code here
  bite(bitten) {
    if (bitten.hidden === false) {
      bitten.health -= 50;
    }

    if (bitten.health <= 0) {
      const indexOfDead = Animal.alive.indexOf(bitten);

      Animal.alive.splice(indexOfDead, 1);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
