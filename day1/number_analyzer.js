// Mini-project: "Number Analyzer"

// Input a number → output if prime / even/odd / multiple of 3.

/* 
    Prime numbers: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97
    Even Numbers: divisible by 2
    Odd Numbers: not divisible by 2
    Multiple of 3: divisible by 3
*/

function isPrime(num) {
  if (num < 2) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;

  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false;
  }
  return true;
}

function isEven(num) {
  return num % 2 === 0;
}

function isOdd(num) {
  return num % 2 !== 0;
}

function isMultipleOf3(num) {
  if (num === 0) return false;
  return num % 3 === 0;
}

// Analyzer Function
function analyzeNumber(num) {
  return {
    number: num,
    isPrime: isPrime(num),
    isEven: isEven(num),
    isOdd: isOdd(num),
    isMultipleOf3: isMultipleOf3(num),
  };
}

console.log(analyzeNumber(0));
console.log(analyzeNumber(1));
console.log(analyzeNumber(2));
console.log(analyzeNumber(-23));
console.log(analyzeNumber(-20));
console.log(analyzeNumber(-101));
console.log(analyzeNumber(101));
console.log(analyzeNumber(12));
