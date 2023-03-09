console.log("Lecture 3");

function getUsername(getAge) {
  const data = { username: "Avi" };
  getAge(data, getGrade);
}

function getAge(data, getGrade) {
  var newData = { ...data, age: 21 };
  getGrade(newData, getPercentage);
}

function getGrade(data, getPercentage) {
  var newData = { ...data, grade: "A+" };
  getPercentage(newData, printData);
}

function getPercentage(data, printData) {
  var newData = { ...data, percentage: "90%" };
  printData(newData);
}

function printData(data) {
  console.log("DATA>>>", data);
}

getUsername(getAge);

// Problem statement -> Build a student monitoring system ->
// getUsername->getAge->getGrade->getPercentage->showData
// manage a data object and pass it in all the functions

// var arr1 = [1, 2, 3, 4];

// function appendNumber() {
//   //   var arr2 = arr1.concat([5, 6, 7, 8, 9]);
//   var arr2 = [...arr1, 5, 6, 7, 8, 9];
//   //   [1, 2, 3, 4, 5];
//   console.log(arr2);
// }

// appendNumber();
