// "use strict";

// function test(label, body) {
//   if (!body()) console.log(`Failed: ${label}`);
// }

// test("convert Latin text to uppercase", () => {
//   return "hello".toUpperCase() == "HELLO";
// });

// function numberToString(n, base = 10) {
//   let result = "",
//     sign = "";
//   if (n < 0) {
//     sign = "-";
//     n = -n;
//   }
//   do {
//     result = String(n % base) + result;
//     n /= base;
//   } while (n > 0);
//   return sign + result;
// }

// function promptNumber(question) {
//   let result = Number(prompt(question));
//   if (Number.isNaN(result)) return null;
//   else return result;
// }

// Exercise One - primitiveMultiply
class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.2) {
    return a * b;
  } else {
    throw new MultiplicatorUnitFailure("Sad!!");
  }
}

function reliableMultiply(a, b) {
  while (true) {
    try {
      return primitiveMultiply(a, b);
    } catch (e) {
      if (!(e instanceof MultiplicatorUnitFailure)) {
        throw e;
      }
    }
  }
}

console.log(reliableMultiply(8, 8));

// Box Challenge
const box = {
  locked: true,
  unlock() {
    this.locked = false;
  },
  lock() {
    this.locked = true;
  },
  _content: [],
  get content() {
    if (this.locked) throw new Error("Locked!");
    return this._content;
  },
};

function withBoxUnlocked(body) {
  const wasLocked = box.locked;
  if (!wasLocked) {
    return body();
  }

  box.unlock();
  try {
    return body();
  } finally {
    box.lock();
  }
}

withBoxUnlocked(function () {
  box.content.push("gold piece");
});

try {
  withBoxUnlocked(function () {
    throw new Error("Pirates on the horizon! Abort!");
  });
} catch (e) {
  console.log("Error raised:", e.message);
}

console.log(box.locked);
