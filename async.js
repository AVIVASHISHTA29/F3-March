console.log("Async");
// Handling Promises using Async Await

function myPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Your Promise Has Been Resolved!");
    }, 2000);
  });
}

// Create a function to handle this promises

async function handlePromise() {
  // To Handle the promise
  console.log("Handling the promise...", new Date());
  const res = await myPromise();
  console.log("RES>>>", res, new Date());
  console.log("hi how are you");
}

handlePromise();
