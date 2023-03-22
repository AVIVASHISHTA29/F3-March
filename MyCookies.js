console.log("Cookies");

// All of your cookies are stored in 1 string which has a limit of 10kb

// cookie = "name=value; name2=value2; name3=value3"
// cookie = "age=21; email=avi@gmail.com; pass=1234"

// To get cookies you type document.cookie
console.log("My cookies", document.cookie);

// But document.cookie gives me a strin which has semicolons to seperate values.

var arrayOfCookieItems = document.cookie.split("; ");
console.log("My cookie Array", arrayOfCookieItems);

// Set cookie

// console.log("My Updated cookies", document.cookie);

// var updatedArr = document.cookie.split("; ");
// console.log("My updated Array", updatedArr);
document.cookie = "username=avi";
document.cookie = "phone=98888";
document.cookie = "account=uy21112";
document.cookie = "email=krishna@gmail.com";
document.cookie = "age=20";
document.cookie = "pass=22";

var arr2 = [1, 2, 3, 4, 5];
var obj = { name: "hi", email: "hi@gmail.com" };

document.cookie = `myArr=${JSON.stringify(arr2)}`;
document.cookie = `obj=${JSON.stringify(obj)}`;

var todaysDate = new Date();
var expiryDate = todaysDate.setDate(todaysDate.getDate() + 10); // 10 days in the future
console.log(new Date(expiryDate));

document.cookie = `otp=1234; expires=${new Date(expiryDate)}`;
