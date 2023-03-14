console.log("Promise Methods");

let promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Promise1");
  }, 1000);
});

let promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Could not resolve promise 2");
    // resolve("Promise 2");
  }, 2000);
});

let promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Promise 3");
  }, 3000);
});

// There is parallel execution of our promises
// promise1.then((res1) => console.log("RES1", res1, new Date())).catch(e=>console.log(e));
// promise2.then((res2) => console.log("RES2", res2, new Date())).catch(e=>console.log(e));
// promise3.then((res3) => console.log("RES3", res3, new Date())).catch(e=>console.log(e));

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

// Promise.any([promise1, promise2, promise3])
//   .then((res) => {
//     console.log("RES", res);
//   })
//   .catch((error) => {
//     console.log("ERROR", error);
//   });

// All settled means - keep the code going, show me the states but still keep the code going.- total time taken = sum of all promises

// Promise.allSettled([promise1, promise2, promise3]).then((res) => {
//   console.log("Res", res);
//   var myHTML = res.map((item) => {
//     return `
//           <div class='quote-box'>
//               <h2>${item.status}</h2>
//               <p>${
//                 item.status == "fulfilled"
//                   ? item.value
//                   : "<span style='color:red'> Reason:" + item.reason + "</span>"
//               }</p>
//           </div>
//         `;
//     //   if(item.status=='fulfilled'){
//     // return item.value
//     // } else return item.reason

//     // res.forEach((item) => {
//     //     if(item.status=='rejected'){
//     //         alert(`Reason:${item.reason}`)
//     //     }
//   });

//   document.getElementById("container").innerHTML = myHTML.join("");
// });

// Race for 100m -> First one to finish 100M
// Race for swimming one lap? -> First one to finish one lap in swimming

// Race is basically for the "fastest outcome" - doesnt matter if my promise gets rejected or resolved it will still go for the fastest outcome.
// total time = (min(promise1,promise2,promise3))

// Promise.race([promise1, promise2, promise3])
//   .then((res) => {
//     console.log("RACE", res);
//   })
//   .catch((e) => {
//     console.log("Error", e);
//   });

const myArray = [promise1, promise2, promise3];

Promise.any(myArray)
  .then((res) => {
    console.log("ANY", res);
  })
  .catch((e) => console.log(e));

// RACE VS ANY ->
// In Race whatever is the fastest.
// In Any -> The fastest Resolved.
