console.log("promise methods");
let promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise1");
  }, 1000);
});

let promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // reject("Could not resolve promise 2");
    resolve("Promise 2");
  }, 2000);
});

let promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 3");
  }, 3000);
});

const myArray = [promise1, promise2, promise3];

async function handlePromiseMethods() {
  try {
    const res = await Promise.all(myArray);
    console.log("res", res);
  } catch (e) {
    console.log(e);
  }
}

handlePromiseMethods();
