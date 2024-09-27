// Filter Select Elements Based on a Condition and REturns an array with The Elements That Fulfilled The Condition
const numbers = [1, 5, 10, 15, 20];

const players = [75, 72, 66, 69, 74, 63, 58, 59];

// const selected = players.filter(p => p > 70);
// const selected = players.filter(p => p > 60);
// const selected = players.filter(p => p > 50);
// const selected = players.filter(p => p % 2 === 1);
const selected = players.filter(p => p % 2 === 0);
console.log(selected);


const friends = ["Tom", "John", "Goku", "Saitama", "Itachi"];
const oddFriends = friends.filter(friend => friend.length > 4);

console.log(oddFriends);
