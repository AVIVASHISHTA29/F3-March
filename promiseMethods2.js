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

Promise.all([promise1(), promise2(), promise3()]).then((res) => {
  console.log(res);
});
