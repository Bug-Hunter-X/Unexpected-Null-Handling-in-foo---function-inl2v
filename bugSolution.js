function foo(a, b) {
  if (a === null || b === null) {
    // throw new Error('One or both inputs are null.'); // Option 1: Throw an error
    return NaN; //Option 2: Return NaN to indicate invalid input
  }
  return a + b;
}

console.log(foo(1, 2)); // 3
console.log(foo(null, 2)); // NaN
console.log(foo(1, null)); // NaN
console.log(foo(null, null)); // NaN