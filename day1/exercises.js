/* Looping a Triangle
 
    Write a loop that makes seven calls to console.log
    to output the following triangle:
        #
        ##
        ###
        ####
        #####
        ######
        #######
*/

function triangle(num = 7) {
  let result = "";
  for (let i = 1; i <= num; i++) {
    result += "#".repeat(i) + "\n";
  }
  return result;
}

// console.log(triangle());

/* FizzBuzz

    Write a program that uses console.log to print all the numbers from 1 to 100,
    with two exceptions. For numbers divisible by 3, print "Fizz" instead of the
    number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.
*/

function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    switch (true) {
      case i % 3 === 0 && i % 5 === 0:
        console.log("FizzBuzz");
        break;
      case i % 3 === 0:
        console.log("Fizz");
        break;
      case i % 5 === 0:
        console.log("Buzz");
        break;
      default:
        console.log(i);
    }
  }
}

// fizzBuzz();

function chessboard() {
  let board = "";
  for (let row = 1; row <= 8; row++) {
    for (let col = 1; col <= 8; col++) {
      board += (row + col) % 2 === 0 ? " " : "#";
    }
    board += "\n";
  }
  console.log(board);
}

chessboard();
