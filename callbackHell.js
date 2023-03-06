// console.log("hi2");
// console.log("hi3");
// console.log("Hi ");
// console.log("Hi ");
// function sayHelloWorld() {
//   console.log("Hello World");
// }

// setTimeout(sayHelloWorld, 1000);

// setTimeout(() => {
//   console.log("Hi 2 ");
// }, 2000);

// 1 second = 1000 milliseconds

// by default js is line by line or one after the other - Synchronous
// Asynchrous - absence of synchronous - which could be not line by line, maybe some time delay, parallely running of code,etc.

// console.log("Hi 0");

// setTimeout(() => {
//   console.log("Hi 1");
// }, 3000);

// setTimeout(() => {
//   console.log("Hi 2 ");
// }, 1000);

// callback -> calling back to something?
// function which calls or executes another function

// function mainFnc(callbackFnc) {
//   console.log("main fnc");
//   callbackFnc();
// }

// function secondFnc() {
//   console.log("second fnc");
// }

// mainFnc(secondFnc);

// function mainFnc() {
//   console.log("main fnc");
//   secondFnc();
// }

// function secondFnc() {
//   console.log("second fnc");
// }

// mainFnc();

// problem statement - real life example of callback fnc
// restaurant

// take order
// give the food
// take payment
// thankyou

function takeOrder(nextFnc) {
  console.log("taking order...");
  //   if(order===success) {
  nextFnc(takePayment);
}

function giveFood(nextFnc) {
  console.log("giving food...");
  //   if(food==given)
  nextFnc(thankyou);
}

function takePayment(nextFnc) {
  console.log("taking payment...");
  //   if(payemnt===recieved)
  nextFnc();
}

function thankyou() {
  console.log("Thankyou...");
}

takeOrder(giveFood);

// takeOrder();
// giveFood();
// takePayment();
// thankyou();
