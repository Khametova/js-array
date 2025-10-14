const s2 = new Set([1, 2, 3]);
console.log(s2);
console.log("s2.has(3)", s2.has(3));
console.log("s2.has(4)", s2.has(4));
s2.add(4);
console.log("s2.has(4)", s2.has(4));
s2.add(5).add(23).add(100);
s2.delete(2);
console.log("s2", s2);
s2.forEach((s) => console.log("s", s));
for (const item of s2) console.log("item", item);

const arr4 = [...s2];
console.log("arr4", arr4);

const sum = arr4.reduce((acc, val) => acc + (val ?? 0), 0);

console.log("sum", sum);
s2.clear();
console.log("s2", s2);
const arr = [1, 6, 9, 4, 9, 1, 5, 6];
const s3 = new Set(arr);
const arr2 = [...new Set(arr)];
console.log("arr2", arr2);

const arr3 = [5, 10, 11];
const arrays = [...new Set([...arr2, ...arr3])];
console.log("arrays", arrays);
