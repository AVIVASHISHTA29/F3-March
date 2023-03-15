// console.log("promises");
// What is a promise?

// const myPromise = new Promise((resolve, reject) => {
//     resolve({ data: "djhiudhw" });
//   resolve("Cats and Dogs data...");
//     reject("Could not find data");
// });

// as soon as the user clicks on search -> tell the google servers that we need cats and dogs data
// Google server will give us a promise -> I will send you the data

// Person A -> Gives 20/- to Person B.
// Person B promises to person A. That I will give this money back to you eventually.

// Person A is waiting.

// Person B gives money back "THEN" Person A will buy chocolate

// Ideal case sceanrio is that person B gives money back after some time/
// Person B never gives money back "THEN" Person A has to move on.
// Person B gives you something else other than money -- even this situation is bad

// Every Promise will have 3 states -
// 1. Pending
// 2. Resolved or fulfilled
// 3. Rejected

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("<h1>Hi Hello</h1>");
    // reject("sorry we couldnt find the data");
  }, 1500);
});

console.log("Pending State>>>", myPromise);

myPromise
  .then((res) => {
    console.log("res>>", res);
    // do something with the data
  })
  .catch((e) => {
    console.log(e);
  });

// resolve means -> return whatever is inside of the brackets () and change the state of promise from pending to fulfilled
//  reject means -> return whatever is inside of the brackets () and change the state of promise from pending to rejected

// Person B -> Person A -> Shopkeeper -> Manufacturer of chocolates
// Person B "THEN" PERSON A "THEN" SHOPKEEPER "THEN" MANUFACTURER
