// sum of range
/* 
    Write a range function that takes two arguments, start and end, and
returns an array containing all the numbers from start up to (and including)
end.
*/

function range(start, end, step) {
  //   if (typeof start !== "number" || typeof end !== "number") {
  //     // throw new Error("Both parameters must be numbers");
  //     console.log("Param not a number!");
  //   }
  let arr = [];
  while (start <= end) {
    arr.push(start);
    start += step;
  }
  return arr;
}

console.log(range(0, 10, 2));

/* 
    Next, write a sum function that takes an array of numbers and returns the
sum of these numbers.
*/
function sumArray(arr) {
  return arr.reduce((a, b) => a + b);
}
