class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  details() {
    const { name, age } = this;
    console.log(`Name: ${name} and Age: ${age}`);
    return `Name: ${name} and Age: ${age}`;
  }
}

class Cat extends Animal {
  constructor(name, age, color) {
    super(name, age);
    this.color = color;
  }
  meow() {
    const { name } = this;
    console.log(`${name} says MEOWWW!!`);
  }
}

class Dog extends Animal {
  constructor(name, age, size) {
    super(name, age);
    this.size = size;
  }
  bark() {
    const { name } = this;
    console.log(`${name} says BAH BAH!!`);
  }
}

const cat = new Cat("sam", 2, "white");
const dog = new Dog("kalu", 4, 5);
