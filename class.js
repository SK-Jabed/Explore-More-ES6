const products = [
    {id: 1, name: "HP EliteBook Laptop", price: 85000},
    {id: 2, name: "Lenovo ThinkPad Laptop", price: 60000},
    {id: 3, name: "Lenovo IdeaPad Laptop", price: 55000},
    {id: 4, name: "MacBook Air M2 Laptop", price: 1300000}
]


// Has Some Properties, Method
class Product {
    country = "Bangladesh";
    constructor(name) {
        this.name = name;
    }
    speak(talk) {
        console.log(`talking about ${talk}`);
    }
}

const lenovo = new Product("Lenovo IdeaPad");
console.log(lenovo)
lenovo.speak("I am Lenovo Laptop of IdeaPad Series");

class Teacher {
    constructor(name, subject) {
        this.name = name;
        this.subject = subject;
    }
    lecture() {
        console.log("Sir is teaching Math")
    }
}

const sabbir = new Teacher("Sabbir Sir", "Physics");
console.log(sabbir);

const rashid = new Teacher("Rashid", "English");