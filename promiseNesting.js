console.log("Promise Methods");

function promise1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise1");
    }, 1000);
  });
}

function promise2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // reject("Could not resolve promise 2");
      resolve("Promise 2");
    }, 2000);
  });
}

function promise3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise 3");
    }, 3000);
  });
}

// Even here the execution does not happen parallely
promise1().then((res1) => {
  console.log("RES1>>>>", res1, new Date());
  promise2().then((res2) => {
    console.log("RES2>>>>", res2, new Date());
    promise3().then((res3) => {
      console.log("RES3>>>>", res3, new Date());
    });
  });
});

async function nestingPromises() {
  const res1 = await promise1();
  console.log(res1, new Date());
  const res2 = await promise2();
  console.log(res2, new Date());
  const res3 = await promise3();
  console.log(res3, new Date());
}

nestingPromises();
