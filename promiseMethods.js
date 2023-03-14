console.log("Promise Methods");

let promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject({ data: "Promise1" });
  }, 1000);
});

let promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // reject("Promise2");
    resolve("Promise 2");
  }, 2000);
});

let promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Promise3");
  }, 3000);
});

// There is parallel execution of our promises
// promise1.then((res1) => console.log("RES1", res1, new Date()));
// promise2.then((res2) => console.log("RES2", res2, new Date()));
// promise3.then((res3) => console.log("RES3", res3, new Date()));

// Even here the execution happens parallely (or asynchronously)
// promise1.then((res1) => {
//   console.log("RES1>>>>", res1, new Date());
//   promise2.then((res2) => {
//     console.log("RES2>>>>", res2, new Date());
//     promise3.then((res3) => {
//       console.log("RES3>>>>", res3, new Date());
//     });
//   });
// });

// First Promise Method = Promise.all
// If I want "ALL" of these promises to resolve and then do something
// If even one of them fails (rejects) show the error
// Time - Parallel running time

// console.log("Time Starting - ", new Date());

// Promise.all([promise1, promise2, promise3])
//   .then((res) => {
//     console.log("RES", res);
//   })
//   .catch((error) => {
//     console.log("ERROR", error);
//   });

// Second Promise Method = Promise.any

// I want IF "ANY" of these promises to resolve and then do something
// if "any one" gets done, just show me the response (whatever is the fastest resolved)
//  Time - which ever is the fastest
// console.log("Time Starting - ", new Date());

Promise.any([promise1, promise2, promise3])
  .then((res) => {
    console.log("RES", res);
  })
  .catch((error) => {
    console.log("ERROR", error);
  });
