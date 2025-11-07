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
        this.celsius = celsius
    }
    get fahrenheit() {
        return this.celsius * 1.8 + 32
    }
    set fahrenheit(value) {
        this.celsius = (value - 32) / 1.8
    }
    static fromFahrenheit(value) {
        return new Temperature((value - 32) / 1.8)
    }
}

let temp = new Temperature(22)
console.log(temp.fahrenheit)

temp.fahrenheit = 86
console.log(temp.celsius)