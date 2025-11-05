// Reversing String Function
function reverseString(str) {
  str = str.trim();
  let reversed = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

console.log(reverseString("Happy "));

// Sum of an array
function sumArray(arr) {
  let sum = 0;
  for (item of arr) {
    if (Number.isNaN(item)) {
      continue;
    } else sum += item;
  }
  return sum;
}

console.log(sumArray([34, -6, 23, 0, 24, "duty"]));
