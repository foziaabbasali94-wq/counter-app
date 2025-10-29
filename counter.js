
// let count=0;
// const counter = document.getElementById("counter");
// const incrementButtons = document.getElementsById("increment");
// const decrementButtons = document.getElementsById("decrement");
// const resetButtons = document.getElementsById("reset");

// incrementButtons.addEventListener("click" ,() =>{
//     count++;
//     updateCounter();
// })

// const counter = document.getElementById("counter");
// const incrementBtn = document.getElementById("increment");
// const decrementBtn = document.getElementById("decrement");
// const resetBtn = document.getElementById("reset");

// let count = 0;

// // Function to update display with color
// function updateCounter(color) {
//   counter.textContent = count;
//   counter.style.color = color;
//   counter.style.transition = "color 0.3s ease";
// }

// // Increment
// incrementBtn.addEventListener("click", () => {
//   count++;
//   updateCounter("limegreen"); // Green when increasing
// });

// // Decrement (stops at 0)
// decrementBtn.addEventListener("click", () => {
//   if (count > 0) {
//     count--;
//     updateCounter("red"); // Red when decreasing
//   }
// });

// // / Reset
// resetBtn.addEventListener("click", () => {
//   count = 0;
//   updateCounter("rgba(255, 255, 0, 0.9)"); // Yellow when reset
// });


const counter = document.getElementById("counter");
const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");
const resetBtn = document.getElementById("reset");

let count = 0;

// Function to update display with color
function updateCounter() {
  counter.textContent = count;
}


// Increment
incrementBtn.addEventListener("click", () => {
  count++;
  updateCounter(); // Green when increasing
});

// Decrement (stops at 0)
decrementBtn.addEventListener("click", () => {
  if (count > 0) {
    count--;
    updateCounter(); // Red when decreasing
  }
});

// / Reset
resetBtn.addEventListener("click", () => {
  count = 0;
  updateCounter(); // Yellow when reset
});
function UpdateCounter()  {
    counter=textContent = count;
}