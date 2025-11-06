function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}

const inventory = [];
repeat(5, (i) => {
  inventory.push(`Unit ${i + 1}`);
});

function greaterThan(n) {
    return m => m > n
}

let greaterThan10 = greaterThan(10)
console.log(greaterThan10(2))
