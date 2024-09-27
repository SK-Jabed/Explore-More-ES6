const products = [
    {id: 1, name: "HP EliteBook Laptop", price: 85000},
    {id: 2, name: "Lenovo ThinkPad Laptop", price: 60000},
    {id: 3, name: "Lenovo IdeaPad Laptop", price: 55000},
    {id: 4, name: "MacBook Air M2 Laptop", price: 1300000}
]

// map 
const names = products.map(product => product.name);
console.log(names);
const prices = products.map(p => p.price);
console.log(prices);


// forEach
products.forEach(p => console.log(p.id));

// filter
const expensive = products.filter(p => p.price > 60000);
console.log(expensive);

// find
const affordable = products.find(p => p.price < 60000);
console.log(affordable);

// reduce 
const total = products.reduce((acum, current) => acum + current.price, 0);
console.log(total);