function filter(arr, test) {
  let passed = [];
  for (let element of arr) {
    if (test(element)) {
      passed.push(element);
    }
  }
  return passed;
}

function map(arr, transform) {
  let mapped = [];
  for (let element of arr) {
    mapped.push(transform(element));
  }
  return mapped;
}

function reduce(array, combine, start) {
    let current = start
    for (let element of array) {
        current = combine(current, element) 
    }
    return current
}

console.log(reduce([1,2,3,4], (a,b)=>a+b, 0))