function wrapValue(n) {
  let local = n;
  return () => local;
}

let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);
console.log(wrap1());
console.log(wrap2());

function multiplier(factor) {
  return (number) => number * factor;
}

let twice = multiplier(2);
console.log(twice(5));

function power(base, exponent) {
  if (exponent == 0) {
    return 1
  } else {
    return base * power(base, exponent-1)
  }
}

console.log(power(2, 6))