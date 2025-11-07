class Matrix {
  constructor(width, height, element = (x, y) => undefined) {
    this.width = width;
    this.height = height;
    this.content = [];

    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        this.content[y * width + x] = element(x, y);
      }
    }
  }
  get(x, y) {
    return this.content[y * this.width + x];
  }
  set(x, y, value) {
    this.content[y * this.width + x] = value;
  }
}

class Temperature {
  constructor(celsius) {
    this.celsius = celsius;
  }
  get fahrenheit() {
    return this.celsius * 1.8 + 32;
  }
  set fahrenheit(value) {
    this.celsius = (value - 32) / 1.8;
  }
  static fromFahrenheit(value) {
    return new Temperature((value - 32) / 1.8);
  }
}

let temp = new Temperature(22);
console.log(temp.fahrenheit);

temp.fahrenheit = 86;
console.log(temp.celsius);

class User {
  #password;
  constructor(name, password) {
    this.name = name;
    this.#password = password;
  }
  checkPassword(pw) {
    return this.#password === pw;
  }
}

const obj = {
  value: 10,
  regular() {
    console.log(this.value);
  },
  arrow: () => console.log(this.value),
};

class Animal {
  move() {
    console.log("MOving...");
  }
}

class Bird extends Animal {
  fly() {
    console.log("Flying...");
  }
}

const seagull = new Bird();
console.log(seagull.move());

class Shape {
  area() {
    throw "Must implement";
  }
}

class Square extends Shape {
  area() {
    return "Square area";
  }
}

class Circle extends Shape {
  area() {
    return "Circle area";
  }
}

[new Square(), new Circle()].forEach((s) => console.log(s.area()));

class Rectangle {
    constructor(w, h) {
        this.w = w;
        this.h = h
    }

    get area() { return this.w * this.h}
    set width(value) { this.w = value}

    static fromSquare(side) {
        return new Rectangle(side, side)
    }
}

console.log(seagull instanceof Bird)