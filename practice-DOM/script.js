let one = document.getElementById("one");
let btn = document.getElementById("btn");
let listButton = document.getElementById("btn2");
let increase = document.getElementById("increase");
let decrease = document.getElementById("decrease");
let totalPress = document.getElementById("totalPress");
let bdy = document.body;
let list = document.getElementById("ul");
let counter = document.getElementById("counter");
let perss = document.getElementById("perss");

btn.addEventListener("click", () => {
  let changeNum = Math.floor(Math.random() * 10);
  let changeNum2 = Math.floor(Math.random() * 10);
  let changeNum3 = Math.floor(Math.random() * 10);
  bdy.style.background = `#c${changeNum2}f${changeNum}c${changeNum3}`;
});

listButton.addEventListener("click", () => {
  let creationOfNewList = document.createElement("li");
  creationOfNewList.textContent = "I am the new one";
  list.appendChild(creationOfNewList);
});

let count = 0;
increase.addEventListener("click", () => {
  counter.innerHTML = count++;
});
decrease.addEventListener("click", () => {
  counter.innerHTML = count--;
});

totalPress.addEventListener("keydown", (event) => {
  console.log("Pressed:", event.key);
  perss.textContent = "You pressed: " + event.key;
});

function createCounter() {
  let actualCounter = 0;
  return {
    inc: () => actualCounter++,
    dec: () => actualCounter--,
    getValue: () => actualCounter
  };
}
let ans = createCounter();
console.log(ans.inc());
console.log(ans.dec());
console.log(ans.getValue());
