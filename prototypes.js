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

// function getOddNumbers(arr) {
//   return arr.filter((item) => item % 2 != 0);
// }

// var myArr = new Array(1, 2, 3, 4, 5);
// // console.log(myArr);

// console.log(getOddNumbers(myArr));

// Array.prototype.returnOdd = function () {
//   return this.filter((item) => item % 2 != 0);
// };

// Array.prototype.customFilter = function () {
//   return this.filter((item) => item % 2 != 0);
// };

// var myArr2 = new Array(1, 2, 3, 4, 5, 7, 8, 9, 10);
// console.log("map", myArr2);

// const users = [{ name: "avi" }, { name: "yash" }];
// console.log(users.returnOdd());

const obj0 = {
  name: "Avi",
};

console.log("Obj0", obj0, obj0.name);

const parent = {
  age: "21",
  speak: function () {
    return "Speaks The Language of Parents";
  },
  cookFood: function () {
    return "Cooks Native Food";
  },
};

const child = {
  name: "Avi",
  __proto__: parent,
  cookFood: function () {
    return "Cooks Western Food";
  },
};

console.log("Child", child);
console.log(child.cookFood());

class Parent {
  age = "21";
  speak() {
    return "Speaks The Language of Parents";
  }
}

// class Child extends Parent {
//   name = "Avi";
// }

// const myChild = new Child();
// console.log(myChild);

class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Dog extends Animal {
  constructor(name, speak) {
    super(name);
    this.speak = speak;
  }
}

const doggy = new Dog("Tommy", "Bark");
console.log(doggy);

const o = {
  a: 1,
  b: 2,
  // __proto__ sets the [[Prototype]]. It's specified here
  // as another object literal.
  __proto__: {
    b: 3,
    c: 4,
  },
};

console.log(o.b);

// Object.prototype.abc = function () {
//   return "ABC";
// };
