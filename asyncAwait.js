console.log("Async");
// Handling Promises using Async Await

function myPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve("Your Promise Has Been Resolved!");
      reject("Your Promise Could Not Be Resolved!");
    }, 2000);
  });
}

// Create a function to handle this promises

// Async keyword - allows me to declare an asynchronous function (the code execution will stop if we use the keyword await)
// Await - handling the promise (or waiting for it to not remain pending and change its state from pending... to fulfilled or rejected.)

async function handlePromise() {
  // To Handle the promise
  console.log("Handling the promise...", new Date());

  // try {
  //   const res = await myPromise();
  //   console.log("RES>>>", res, new Date());
  // } catch (e) {
  //   console.log("Error>>>", e, new Date());
  // }

  const res = await myPromise().catch((e) => console.log("Error>>>", e));
  if (res) {
    console.log("RES>>>", res, new Date());
    // now I for sure have my res object
  } else {
    // alert("No response");
  }
}

handlePromise();
