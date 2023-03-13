// Converting Callback Hells into Promise Chain

// function greeting(callbackFnc) {
//   setTimeout(() => {
//     console.log("Hi How are you?");
//     callbackFnc(giveFood);
//   }, 1000);
// }

function greetingFnc() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve("Hi How are you?");
      reject("restaurant was closed");
    }, 1000);
  });
}

function takeOrder() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Taking Your Order...");
      // reject("All Waiters are busy");
    }, 1000);
  });
}

function giveFood() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve("giving food...");
      reject("no bread ");
    }, 1000);
  });
}

function takePayment() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Please pay...");
      // reject("Payment wallet balance is 0");
    }, 1000);
  });
}

function thankyou() {
  setTimeout(() => {
    console.log("Thanks for visiting...");
  }, 1000);
}

// greeting "THEN" takeOrder "THEN" giveFood "THEN" takePayment "THEN" Thankyou

// greetingFnc()
//   .then((res1) => takeOrder())
//   .then((res2) => giveFood())
//   .then((res3) => takePayment())
//   .then((res4) => thankyou());

greetingFnc()
  .then((res1) => {
    console.log("RES1", res1);
    return takeOrder();
  })
  .then((res2) => {
    console.log("RES2", res2);
    return giveFood();
  })
  .then((res3) => {
    console.log("RES3", res3);
    return takePayment();
  })
  .then((res4) => {
    console.log("RES4", res4);
    return thankyou();
  })
  .catch((err) => {
    console.log("ERROR>>>", err);
  });
