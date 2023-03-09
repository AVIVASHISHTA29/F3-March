// console.log("Hi 0");

// function hi1() {
//   console.log("Hi 1");
// }

// function hi2() {
//   console.log("Hi 2");
// }

// function hi3() {
//   console.log("Hi 3");
// }

// setTimeout(hi1, 1000);
// setTimeout(hi2, 2000);
// setTimeout(hi3, 3000);

// 1 second = 1000 milliseconds

// by default js is line by line or one after the other - Synchronous
// Asynchrous - absence of synchronous - which could be not line by line, maybe some time delay, parallely running of code,etc.

// console.log("Hi 0");

// setTimeout(() => {
//   console.log("Hi 1");
// }, 1000);

// setTimeout(() => {
//   console.log("Hi 2 ");
// }, 1000);

// callback -> calling back to something?
// function which calls or executes another function

// problem statement - you need to write a fnc which calls another function,
//  in this function pass the second as a param

function mainFnc(secondFnc) {
  console.log("main fnc");
  secondFnc();
}

function secondFnc() {
  console.log("second fnc");
}

mainFnc(secondFnc);

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

// Problem Statement is -> You own a restaurant, write functions for a customers full experience.

// greeting->takeOrder->giveFood->takePayment->Thankyou

function greeting(takeOrder) {
  console.log("Hi How are you?");
  // if greeting ==successful
  takeOrder(giveFood);
}

function takeOrder(giveFood) {
  console.log("Taking Your Order...");
  // if order taken == successful
  giveFood(takePayment, sorry);
}

function giveFood(takePayment, sorry) {
  console.log("giving food...");
  // if they liked the food
  takePayment(thankyou);
  // else if cockroach
  // sorry();
}

function takePayment(thankyou) {
  console.log("Please pay...");
  thankyou();
}

function thankyou() {
  console.log("Thanks for visiting...");
}

function sorry() {
  console.log("sorry for the inconvinience...");
}

greeting(takeOrder);

// greeting();
// giveWater();
// takeOrder();
// giveFood();
// refillWATER();
// takePayment();
// giveDiscount();
// thankyou();
