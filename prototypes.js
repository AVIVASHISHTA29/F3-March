console.log("Prototypes");

// class User {
//   constructor(myname, myemail) {
//     this.name = myname;
//     this.email = myemail;
//   }
// }

// const user1 = new User("Avi2", "avi2@gmail.com");

// console.log(user);
// console.log(user1);

function getOddNumbers(arr) {
  return arr.filter((item) => item % 2 != 0);
}

var myArr = new Array(1, 2, 3, 4, 5);
// console.log(myArr);

console.log(getOddNumbers(myArr));

Array.prototype.returnOdd = function () {
  return this.filter((item) => item % 2 != 0);
};

Array.prototype.customFilter = function () {
  return this.filter((item) => item % 2 != 0);
};

var myArr2 = new Array(1, 2, 3, 4, 5, 7, 8, 9, 10);
console.log("map", myArr2);

const users = [{ name: "avi" }, { name: "yash" }];
console.log(users.returnOdd());
