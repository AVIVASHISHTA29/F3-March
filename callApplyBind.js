console.log("call,apply,bind");

var obj1 = {
  name: "Avi",
  occupation: "instructor",

  getInfo: function () {
    return "Info of Obj is " + this.name + "," + this.occupation;
  },
};

var obj2 = {
  name: "Ajay",
  occupation: "student",
};

// console.log(obj2.getInfo());

// console.log(obj2);
// console.log(obj2.getInfo());
// What if i want to call obj1 but as obj2 -> 'this' (of obj1's function) should refer to obj1
// console.log(obj1.getInfo());
// console.log(obj1.getInfo.call(obj2));

// console.log(obj2);

function getInfo2(location, year, world) {
  return (
    "Info of Obj is " +
    this.name +
    "," +
    this.occupation +
    " They live in " +
    location +
    " The year is " +
    year +
    " They live on the planet " +
    world
  );
}

// console.log(getInfo2);
// console.log(getInfo2.call(obj1, "India", "2023", "Earth")); // call getInfo2 as obj1 -> so that 'this' refers to obj1
// console.log(getInfo2.call(obj2, "India"));

// console.log(getInfo2.apply(obj2, ["India", "2023", "Earth"]));

// apply is the same as call, the only difference is that you send an array of paramaters as
// your second paramter and the first is the object which you want to refer

// BIND ->

const getInfoOfObj1 = getInfo2.bind(obj1, "India", "2023", "Earth");
console.log(typeof getInfoOfObj1);
// console.log(getInfoOfObj1());
console.log(getInfoOfObj1());
