// Flattening
nest = [[1, 2, 3, 4, 5], 6, 7, [8, 9], [0]];

function flatten(arr) {
  return arr.reduce((a, b) => {
    a.concat(b);
  });
}

console.log(flatten(nest));
