const numbers = [75, 72, 66, 69, 74, 63, 58, 59];
const total = numbers.reduce((previous, current) => previous + current, 0);
console.log(total);

const sum = numbers.reduce((p, c) = p + c, 0);
console.log(sum);