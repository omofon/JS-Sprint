// Define a Product class with name, price, method applyTax(), method displayInfo().
// Create QRProduct class: id, name, category, method displayInfo(). Build 3 instances, call method and output info.

class Product {
    // #basePrice
    constructor (name, price) {
        this.id = Date.now().toString(36) + Math.random().toString(36).substring(2,9)
        this.name = name;
        this.price = price
    }

    set applyTax(tax) {
        this.price = this.price + (this.price * Math.abs(tax) / 100)
    }

    get displayInfo() {
        console.log(`Product name: ${this.name}\nProduct price: ${this.price}`)
    }
}

const laptop01 = new Product("HP Elitebook 820", 350000)
const laptop02 = new Product("Dell Latitude", 450000)
const iphone01 = new Product("iPhone 15", 1350000)

iphone01.displayInfo