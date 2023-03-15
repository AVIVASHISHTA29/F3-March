console.log("Converting promise chains into async await");

function greeting() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hi How are you?");
    }, 1000);
  });
}

function takeOrder() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Taking Your Order...");
    }, 1000);
  });
}

function giveFood() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("giving food...");
    }, 1000);
  });
}

function takePayment() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Please pay...");
    }, 1000);
  });
}

function thankyou() {
  setTimeout(() => {
    console.log("Thanks for visiting...");
  }, 1000);
}

// greeting "THEN" takeOrder "THEN" giveFood "THEN" takePayment "THEN" Thankyou
// console.log(new Date());
// greeting()
//   .then((res1) => {
//     console.log(res1, new Date());
//     return takeOrder();
//   })
//   .then((res2) => {
//     console.log(res2, new Date());
//     return giveFood();
//   })
//   .then((res3) => {
//     console.log(res3, new Date());
//     return takePayment();
//   })
//   .then((res4) => thankyou());

async function handleChainOfPromises() {
  console.log("Handling...", new Date());
  const res1 = await greeting();
  console.log(res1, new Date());
  const res2 = await takeOrder();
  console.log(res2, new Date());
  const res3 = await giveFood();
  console.log(res3, new Date());
  const res4 = await takePayment();
  console.log(res4, new Date());
  thankyou();
}

handleChainOfPromises();
