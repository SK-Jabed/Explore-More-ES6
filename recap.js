/**
 * * 1. var, let & const 
 * * 2. Default Parameter
 * * 3. Template String 
 * * 4. Arrow Function
 * * 5. Spread Operator
 * * 6. Destructuring 
 * * 7. Keys and Values
 * * 8. Object.keys, Object.values, Object.entries
 * * 9. for of loop ==> Used in Array and String
 * * 10. for in loop ==> Used in Object
 */

const a = 60;
const numbers = [56, 12, 26];
const person = {
    name: "Sharukh Khan"
}

const massage = `${person.name} is ${a} years old. His Movies number is ${numbers[0]}.`;

console.log(massage);

if (true) {

}

const square = x => x * x;
const sum = (a, b) => a + b;


const {} = {x: 2, y: 5, z: 3, name: "SKJ", age: 19};
const [first, second, ...remaining] = ["Kamal", "Jamal", "Damal", "Samal"];
