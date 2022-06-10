// Write a class called Unicorn
// it should have a dynamic name property
// it should have a color property, that is silver by default
// it should have a method called "say" that returns whatever string is passed in, with "*~*" at the beginning and end of the string

class Unicorn {
  constructor(name) {
    this.name = name;
    this.color = "silver";
    this.message = "hello"
  }

  Say(newMessage) {
    this.message = `*~* ${newMessage} *~*`;
}
}

var unicorn1 = new Unicorn("Billy");
console.log(unicorn1);

unicorn1.Say("My day is going well!");
console.log(unicorn1);


// Write a class called Vampire
// it should have a dynamic name property
// it should have a pet property, that is a bat, by default BUT it could be dynamic if info is passed in initially
// it should have a thirsty property, that is true by default
// it should have a drink method. When called, the thirsty property changes to false

class Vampire {
  constructor(name) {
    this.name = name;
    this.pet = "bat";
    this.thirsty = true
  }

  changePet(newPet) {
    this.pet = newPet;
  }
  drink(blood) {
    this.thirsty = false;
  }
}

var vampire1 = new Vampire("Dracula");
console.log(vampire1);

vampire1.drink();
console.log(vampire1);

//  Write a Dragon class
// it should have a dynamic name property (string)
//  it should have a dynamic rider property (string)
//  it should have a dynamic color property (string)
//  it should have a isHungry property that is true by default
//  it should have a eat method. If the dragon eats 4 times, it is no longer hungry
  // HINT: This requires you to use your knowledge from the conditionals lesson
class Dragon {
  constructor(name, rider, color) {
    this.name = name;
    this.rider = rider;
    this.color = color;
    this.isHungry = true;
  }

  eat(hungerStatus) {
    if (hungerStatus >= 4) {
    this.isHungry = false;
  }
}
}

var dragon1 = new Dragon("Aragon", "Tom", "blue");
console.log(dragon1);

dragon1.eat(4);
console.log(dragon1);


//  BIG CHALLNEGE: Write a Hobbit class
//  it should have a dynamic name property (string)
//  it should have a dynamic disposition property (string)
//  it should have an age property that defaults to 0
//  it should have a celebrateBirthday method. When called, the age increases by 1
//  it should have an isAdult property (boolean) that is false by default. once a Hobbit is 33, it should be an adult
//  it should have an isOld property that defaults to false. once a Hobbit is 101, it is old.
//  it should have a hasRing property. If the Hobbit's name is "Frodo", true, if not, false.
