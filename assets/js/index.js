//alert("Helo World");
const numbers = [1, 6, 4, 7];

/*numbers.push(28);
console.log("numbers", numbers);
numbers.pop(28);
console.log("numbers", numbers);
numbers.unshift(37);
console.log("numbers", numbers);
numbers.shift(37);
console.log("numbers", numbers);
*/

//const deletedNummbers = numbers.splice(3).concat(numbers.splice(0, 1));

const deletedNummbers = [...numbers.splice(3), ...numbers.splice(0, 1)];

/*console.log(numbers[0]);
console.log(numbers[3]);
*/
console.log(numbers);
console.log(numbers.length);

const numbers2 = [...numbers];
const numbersCopy = numbers.slice();

for (let i = 0; i < numbers.length; i += 2) {
  console.log(numbers[i]);
}

function arrayProduct(arr) {
  let product = 1;

  for (let i = 0; i < arr.length; i++) {
    console.log("i", i);
    product *= arr[i];
  }

  return product;
}

console.log(arrayProduct(numbers));
