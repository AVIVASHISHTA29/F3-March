console.log("Oops Contd");

class BankAccount {
  #accountNumber;
  //  To make a variable private all you need to do is add a # infront of it
  constructor() {
    this.name = "Avi Vashishta";
    this.#accountNumber = "123456789012";
  }

  getAccountNumber() {
    return (
      "XXXX" +
      this.#accountNumber.slice(3, 8) +
      "XX" +
      this.#accountNumber.slice(-2)
    );
  }

  #privateMethod() {
    return "Private Details of the Account";
  }
}

const myAccount = new BankAccount();
console.log(myAccount);
console.log("accountNumber", myAccount.accountNumber); //=> undefined
// console.log("accountNumber#", myAccount.#accountNumber);
console.log(myAccount.privateMethod); //=> undefined
console.log(myAccount.getAccountNumber()); //=> test
// console.log(house1.#property); //=> Syntax error

// PII = Personally Identifiable Information

// Inheritence
// Inheritance example

class person {
  constructor(name) {
    this.name = name;
    this.species = "Human";
  }

  speak() {
    return "Person speaks native language";
  }
}

class student extends person {
  constructor(name, id) {
    // super keyword for calling the above
    // class constructor
    super(name);
    this.id = id;
  }
}

class instructor extends person {
  constructor(name, classes) {
    // super keyword for calling the above
    // class constructor
    super(name);
    this.classes = classes;
  }
  speak() {
    return "Speaking english";
  }
  myFnc() {
    return super.speak();
  }
}

let student1 = new student("Mukul", 22);
console.log(student1.speak());

const person1 = new person("Avi");
console.log(person1);

const instructor1 = new instructor("Avi", ["F1", "F3"]);
console.log(instructor1.myFnc());
