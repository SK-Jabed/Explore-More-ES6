const numbers = [22, 26, 33, 43, 65];

const doubled = numbers.map(num => num * 2);
console.log(doubled);
const fiveBonus = numbers.map(num => num + 5);
console.log(fiveBonus);
const halfs = numbers.map(num => num / 2);
console.log(halfs);

const friends = ["Tom", "John", "Goku", "Saitama", "Itachi"];
const lengths = friends.map(friend => friend.length);
console.log(lengths);

const firstLetter = friends.map(friend => friend[0]);
console.log(firstLetter);
