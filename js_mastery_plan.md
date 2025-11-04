# JavaScript Mastery Plan (10 Days)

**Daily time commitment:** ~3 hours minimum  
**Goal by Day 10:** Fluent in core JS logic + DOM + async + API calls + mini-project tied to QR/AI.

---

## Resources (bookmark these)

- [Async/await – The Modern JavaScript Tutorial](https://javascript.info/async-await) (javascript.info)
- [How to use promises – MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises) (developer.mozilla.org)
- [W3Schools JavaScript Tutorial](https://www.w3schools.com/js/) (quick reference) (w3schools.com)
- [Asynchronous JavaScript: From Callback Hell to Async/Await](https://www.toptal.com/javascript/asynchronous-javascript-async-await-tutorial) (Toptal) (toptal.com)

Use these as your go-to references when you hit blocks.

---

## Plan Outline

### Day 1 — Reset & Setup (Ch. 1-2)

**Topics:** Values, types, operators, program structure (variables, flow control).

**Tasks:**
- Write small programs: check even/odd, compute area of rectangle, string operations.
- Practice if/else, for, while, switch.

**Mini-project: "Number Analyzer"**
- Input a number → output if prime / even/odd / multiple of 3.
- **Focus:** Comfort with basic JS syntax.

---

### Day 2 — Functions (Ch. 3)

**Topics:** Function declaration, expressions, arrow functions, scope, return values, closures.

**Tasks:**
- Write reversing string function, sum array function.
- Experiment with this, bind, etc (basic).

**Mini-project: "QR Helper Utilities"**
- Build helper functions: generate random ID (string/number), format text (truncate), clean whitespace.
- **Focus:** Understand functions as first-class citizens.

---

### Day 3 — Objects & Arrays (Ch. 4)

**Topics:** Arrays, objects, methods, map, filter, reduce, sorting, nested data.

**Tasks:**
- Create array of product objects {name, price}, apply discount, sort by price.

**Mini-project: "Product Catalog Data"**
- Hard-code 5-10 products. Use console or simple UI to list, sort, filter products.
- **Focus:** Manipulating and traversing structured data.

---

### Day 4 — Higher-Order Functions (Ch. 5)

**Topics:** Functions that take/return other functions, chaining map/filter/reduce, functional style patterns.

**Tasks:**
- Use map + filter + reduce to compute e.g. total cart cost after discounts & filter cheapest items.

**Mini-project: "QR History Processor"**
- Array of QR scan logs (each log: {code, timestamp, product}) → compute total scans, most scanned product, scans by day.
- **Focus:** Thinking in steps and transformations rather than imperative loops.

---

### Day 5 — Object-Oriented & "Secret Life of Objects" (Ch. 6)

**Topics:** Constructors, classes, inheritance, prototypes, methods, this.

**Tasks:**
- Define a Product class with name, price, method applyTax(), method displayInfo().

**Mini-project: "QRProduct Class"**
- Create QRProduct class: id, name, category, method displayInfo(). Build 3 instances, call method and output info.
- **Focus:** Encapsulation & organizing code into objects.

---

### Day 6 — Debugging & Modules (Ch. 8 + Ch. 10)

**Topics:** Error types, debugging tools (console, breakpoints), ES6 modules (import/export).

**Tasks:**
- Introduce deliberate bugs, use browser dev tools to step through.
- Create two JS files: utils.js exporting functions, main.js importing them.

**Mini-project: "Utility Module"**
- Make utils.js with helper functions (from Day 2). In main.js, import those functions and use them.
- **Focus:** Code organization + readiness for larger apps.

---

### Day 7 — Async Programming (Ch. 11)

**Topics:** Promises, async/await, error handling, handling external data.

**Tasks:**
- Write a function returning a Promise, then rewrite it with async/await.

**Mini-project: "Fake Product Fetcher"**
- Use fetch() to get product list from a public API or dummy JSON. Display list in console or simple HTML.
- **Focus:** Understanding asynchronous flow & preparing for API calls.

---

### Day 8 — DOM (Ch. 13-14)

**Topics:** DOM selection (querySelector), element creation, modification, events (basic).

**Tasks:**
- Build simple UI: input field, button, output area. Use JS to capture input and display output.

**Mini-project: "QR Generator Phase 1"**
- Create an input (e.g., product name) → button → generate a QR code (use library like qrcode.js) → display on page.
- **Focus:** Making interactive front-end.

---

### Day 9 — Events & User Interaction (Ch. 15)

**Topics:** Event listeners (click, submit), event objects, form handling, preventDefault, localStorage.

**Tasks:**
- Handle form submission, validate input, store data in localStorage.

**Mini-project: "QR History Tracker"**
- When a QR is generated (from Day 8), log it in localStorage. Display list of previous scans on page, with timestamp.
- **Focus:** Building workflows and capturing user data.

---

### Day 10 — HTTP & Integration (Ch. 18)

**Topics:** fetch() POST requests, handling JSON, backend integration (mock or real).

**Tasks:**
- Build fetch() call: POST some data (e.g., QR code info) to a mock endpoint (you can use [jsonplaceholder.typicode.com](https://jsonplaceholder.typicode.com) or simulate with setTimeout). Handle response.

**Mini-project: "QR AI Mock Integration"**
- On QR generation action: send QR code data via fetch() POST to endpoint → receive fake "AI analysis" response (use mock) → display the "analysis" in UI.
- **Focus:** Tying frontend to backend/API logic — key for your QR/AI app.

---

## ✅ Output by End of Day 10

Working mini web app that:
- Generates QR codes on input.
- Tracks history of scans.
- Sends scan data via HTTP request.
- Gets & displays an "analysis" or summary.

Core JS fluency: data types, structures, functions, async, DOM, events.

Clean code organization: modules, classes.

Foundation ready for React/Node next phase.

---

## 📌 Additional Augmenting Resources & Projects

- **Article:** [Asynchronous JavaScript: Callbacks, Promises, and Async/Await](https://metana.io/blog/asynchronous-javascript-callbacks-promises-and-async-await/) (Metana)
- **Tutorial:** [Promises From The Ground Up](https://www.joshwcomeau.com/javascript/promises/) – Josh W. Comeau (joshwcomeau.com)
- **Video/Community thread:** [Reddit "best tutorials for JS"](https://www.reddit.com/r/learnjavascript/) (Reddit)
- **Practice exercises:** [W3Schools "Learn JavaScript"](https://www.w3schools.com/js/) for quick try-it exercises (w3schools.com)

You can drop these into a document or PDF to reference offline.

---

## 📆 Daily Checklist Template

Each day:

- [ ] Review topics listed.
- [ ] Read or watch/skim relevant resource(s).
- [ ] Code the tasks listed.
- [ ] Build/extend the mini-project.
- [ ] At end of session: write one line summary: "Today I built/fixed…".
- [ ] Identify one bug or one thing to improve next day.

---

## ⚠️ Rules & Accountability

- **No new frameworks until Day 10 is complete.**
- **No "just watching"** – every concept must be applied immediately.
- **Ship daily output** (even if small) — visible progress builds momentum.
- **If you skip a day, you reset your chain. Don't skip.**
- **Use your 3-hour block strictly:** time block it, no distractions.