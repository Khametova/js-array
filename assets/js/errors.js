/*function pow(base, exponent) {
  if (typeof base !== "number" || typeof exponent !== "number") {
    throw new TypeError("степень и ее основания должн бть числами");
  }
  if (
    base <= 0 ||
    exponent <= 0 ||
    !Number.isInteger(base) ||
    !Number.isInteger(exponent)
  ) {
    throw new RangeError("степень и ее основ должн бть цел и пол");
  }
  return Math.pow(base, exponent);
}
try {
  console.log("pow", pow("1", 3));
} catch (e) {
  console.log(e);
}
console.log("next");

*/
function pow(base, exponent) {
  // Валідація типів та значень
  if (typeof base !== "number" || isNaN(base)) {
    throw new TypeError("Параметр base повинен бути числом");
  }
  if (!Number.isInteger(exponent)) {
    throw new TypeError("Параметр exponent повинен бути цілим числом");
  }
  if (exponent < 0) {
    throw new RangeError("Параметр exponent не може бути від'ємним");
  }

  // Базовий випадок рекурсії
  if (exponent === 0) {
    return 1;
  }

  // Рекурсивний виклик
  return base * pow(base, exponent - 1);
}

// Приклад виклику з try/catch
try {
  let result = pow(2, 3);
  alert("Результат: " + result);
} catch (error) {
  if (error instanceof TypeError) {
    alert("Помилка типу: " + error.message);
  } else if (error instanceof RangeError) {
    alert("Помилка діапазону: " + error.message);
  } else {
    alert("Невідома помилка: " + error.message);
  }
}
