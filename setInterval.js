var count = 0;
const myInterval = setInterval(() => {
  console.log(count++);
}, 1000);

console.log("My Interval>>>", myInterval);

const myTimeoutID = setTimeout(() => {
  console.log("my timeout");
}, 2000);

document.getElementById("btn").addEventListener("click", () => {
  console.log("Interval stopped!");
  clearInterval(myInterval);
  clearTimeout(myTimeoutID);
});
