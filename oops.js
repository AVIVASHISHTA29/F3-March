console.log("OOPS");

// var user_1_first_name = "Avi";
// var user_1_last_name = "Vashishta";
// var user_1_email = "avivashishta@gmail.com";
// var user_1_phone = "9999999999";
// var user_1_username = "avi_29";
// var user_1_password = "2190813y27e2y8@#@#suhy2_";

// var user_2_first_name = "Avi_2";
// var user_2_email = "avivashishta_2@gmail.com";
// var user_2_phone = "9999999992";
// var user_2_username = "avi_29_2";
// var user_2_password = "2190813y27e2y8@#@#suhy2__2";

// var user_3_firstName = "Avi_2";
// var user_3_email = "avivashishta_2@gmail.com";
// var user_3_phone = "9999999992";
// var user_3_username = "avi_29_2";
// var user_3_password = "2190813y27e2y8@#@#suhy2__2";

// \

var user1 = {
  name: "Avi",
  email: "avivashishta@gmail.com",
  phone: "9899999999",
  username: "avi_29",
  password: "2i1hw1xb",
};

console.log(user1);

function createUser(myName, myEmail, myPhone, myUsername, myPassword) {
  return {
    name: myName,
    email: myEmail,
    phone: myPhone,
    username: myUsername,
    password: myPassword,
  };
}

var user2 = createUser("Avi", "avi@gmail.com", "9999", "avi_", "jshsjh");
console.log(user2);

class User {
  constructor(myName, myEmail, myPhone, myUsername, myPassword) {
    this.name = myName;
    this.email = myEmail;
    this.phone = myPhone;
    this.username = myUsername;
    this.password = myPassword;
  }
}

var user3 = new User("Avi", "avi@gmail.com", "9999", "avi_", "jshsjh");
console.log(user3);

console.log("NAME", user1.name, user2.name, user3.name);

class Dog {
  constructor(myBreed, myColor, myHeight) {
    this.breed = myBreed;
    this.color = myColor;
    this.height = myHeight;
  }
  //   giveDetails() {
  //     return `The breed of my dog is ${this.breed}, My dog is of the color - ${this.color} and my Dog is this tall - ${this.height} cm`;
  //   }

  giveDetails = function () {
    return `The breed of my dog is ${this.breed}, My dog is of the color - ${this.color} and my Dog is this tall - ${this.height} cm`;
  };
}

var tommy = new Dog("German Shehpard", "brown", "100");
console.log(tommy.breed, tommy.color, tommy.height);
console.log(tommy.giveDetails());
