// Creating a new element
const div = document.createElement("div");

const userInput = "Hello User 1\n";
div.textContent = userInput;
div.id = "my-div";
div.className = "container active";
div.setAttribute("data-user-id", "123");
console.log(div.getAttribute("data-user-id"));

const textNode = document.createTextNode("Hello World");
div.appendChild(textNode);

document.body.appendChild(div);

// GOOD - Single reflow using DocumentFragment
const fragment = document.createDocumentFragment();
for (let i = 0; i < 100; i++) {
  const item = document.createElement("li");
  item.textContent = `Item ${i}`;
  fragment.appendChild(item);
}

// Attributes vs Properties
const input = document.querySelector("input");

// Attributes (HTML)
input.setAttribute("value", "John Doe");
console.log(`Input value: ${input.getAttribute("value")}`);

// Property (JS Object)
input.value = "world";
console.log(`Input value: ${input.value}`);

console.log(input.getAttribute("value"));

// Querying the DOM
const elem = document.querySelector(".my-class"); // Returns first match

const elems = document.querySelectorAll(".my-class"); // Returns static NodeList (array-like snapshot)

document.querySelector("div > p.highlight:first-child");

// Returns element or null
const formName = document.getElementById("name");

const divElems = document.getElementsByClassName("my-class");

// EVENTS
const button = document.querySelector("button");

button.addEventListener("click", function (e) {
  console.log("clicked", e);
});

const element = document.getElementById("name");
element.addEventListener("click", function (event) {
  // Essential properties:
  event.target; // Element that triggered event
  event.currentTarget; // Element with listener attached
  event.type; // 'click', 'keydown', etc.

  // Control flow:
  event.preventDefault(); // Stop default action
  event.stopPropagation(); // Stop bubbling
  event.stopImmediatePropagation(); // Stop other listeners on same element

  // Mouse events:
  event.clientX, event.clientY; // Viewport coordinates
  event.pageX, event.pageY; // Document coordinates
  event.button; // Which mouse button

  // Keyboard events:
  event.key; // 'Enter', 'a', 'ArrowUp'
  event.code; // 'KeyA', 'Enter', 'ArrowUp'
  event.ctrlKey, event.shiftKey, event.altKey;
});

// Event propagation
document.getElementById("outer").addEventListener("click", () => {
  console.log("outer");
});
document.getElementById("inner").addEventListener("click", () => {
  console.log("inner");
});
document.getElementById("btn").addEventListener("click", () => {
  console.log("button");
});

// Event Types
// Click events
elem.addEventListener("click", (e) => {}); // Full click
elem.addEventListener("dblclick", (e) => {}); // Double click
elem.addEventListener("mousedown", (e) => {}); // Button pressed
elem.addEventListener("mouseup", (e) => {}); // Button released

// Movement
elem.addEventListener("mousemove", (e) => {
  console.log(e.clientX, e.clientY); // Track cursor
});
elem.addEventListener("mouseenter", (e) => {}); // No bubble
elem.addEventListener("mouseleave", (e) => {}); // No bubble
elem.addEventListener("mouseover", (e) => {}); // Bubbles
elem.addEventListener("mouseout", (e) => {}); // Bubbles

// Context menu
elem.addEventListener("contextmenu", (e) => {
  e.preventDefault(); // Disable right-click menu
});


formName.addEventListener('submit', e => {
    e.preventDefault()

    const formData = new FormData(e.target)
    
})