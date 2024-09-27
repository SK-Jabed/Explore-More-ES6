// Data Access 
const data = [{id: 69, name: "Sheikh Jabed", address: "Dhaka"}];

console.log(data[0]);
console.log(data[0].address);


const products = {
    count: 5000,
    data: [
        {id: 1, name: "HP EliteBook Laptop", price: 85000},
        {id: 2, name: "Lenovo ThinkPad Laptop", price: 60000}
    ]
}

// Second Product Price 
console.log(products);
console.log(products.data);
console.log(products.data[1]);
console.log(products.data[1].price);


const player = {
    id: 5000,
    name: "Lionel Messi",
    address: {
        street: {
            first: "55/3A ",
            second: "Miami",
            third: "Block-69"
        },
        city: "Miami",
        country: "USA"
    }
}

const player2 = {
    id: 5002,
    name: "Cristiano Ronaldo",
    address: {
        city: "Riyadh",
        country: "Saudi Arabia"
    }
}

console.log(player);
console.log(player.address);
console.log(player.address.street);
console.log(player.address.street.second);
console.log(player2.address.street?.second);
