function foo(a, b) {
  if (a === null || b === null) {
    return null; // Correct handling of null values
  }
  return a + b; // Potential bug if a or b is undefined
}

console.log(foo(1, 2)); // 3
console.log(foo(null, 2)); // null
console.log(foo(1, undefined)); // NaN - Unexpected behavior