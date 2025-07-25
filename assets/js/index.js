//alert("Helo World");
const numbers = [1, 6, 4, 7];

console.log(numbers[0]);
console.log(numbers[3]);

delete numbers[1];
delete numbers[3];
console.log("numbers", numbers);

console.log(numbers);
console.log(numbers.length);

const numbers2 = [...numbers];
