console.log("getters and setters");

class User {
  constructor(myEmail, myPhone, myUsername, myPassword) {
    this.name = "";
    this.email = myEmail;
    this.phone = myPhone;
    this.username = myUsername;
    this.password = myPassword;
  }
  get getName() {
    return "Mr. " + this.name.slice(0, 1).toUpperCase() + this.name.slice(1);
  }
  getNameFnc() {
    return this.name.slice(0, 1).toUpperCase() + this.name.slice(1);
  }
  set setName(myName) {
    this.name = myName.slice(0, 1).toUpperCase() + myName.slice(1);
  }
}

var user1 = new User("avi@gmail.com", "9999", "avi_", "jshsjh");
console.log(user1);
user1.setName = "avi";
console.log(user1.getNameFnc());
// console.log(user1.getName);
// console.log(user1.getNameFnc());
