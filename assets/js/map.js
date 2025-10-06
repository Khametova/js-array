const map2 = new Map([
  [1, "first"],
  [3, "third"],
]);
map2.set(2, "second");
console.log("map2", map2);
console.log(map2.has(2));
console.log("map2.size", map2.size);
console.log(map2.get(2));
console.log(map2.get(1));
console.log(map2.get(3));
map2.delete(2);
console.log("map2", map2);
console.log(map2.size);
console.log(map2.has(2));
