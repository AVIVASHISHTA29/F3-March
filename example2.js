console.log("callback Hell");

function getUsername() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("1");
      resolve({ username: "Avi" });
    }, 1000);
  });
}

function getAge(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("2");
      const newData = { ...data, age: 21 };
      resolve(newData);
    }, 1000);
  });
}

function getGrade(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("3");
      resolve({ ...data, grade: "A+" });
    }, 1000);
  });
}

function getPercentage(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("4");
      resolve({ ...data, percentage: "90%" });
    }, 1000);
  });
}

function printData(data) {
  console.log("DATA>>>", data);
}

// getUsername -> getAge -> getGrade -> getPercentage -> PrintData

getUsername()
  .then((data1) => getAge(data1))
  .then((data2) => getGrade(data2))
  .then((data3) => getPercentage(data3))
  .then((data4) => printData(data4))
  .catch((e) => console.log(e));
