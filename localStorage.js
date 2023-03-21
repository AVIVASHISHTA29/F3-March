// Problem Statement -> Somehow store the information that a person has logged in.
// It should still be there even if I close my tab or I close my google chrome , or even if I shut down laptop.

// First -> Access the values from the inputs and make a login function.
// Second -> In the login function somehow store this value that Person X has logged in.
// Third -> Next time when the user comes, be it after closing the tab or the app or the laptop. Show that the person had previosuly logged in.

function login() {
  var emailValue = document.getElementById("input-email").value;
  var passwordValue = document.getElementById("input-password").value;

  var userObj = {
    email: emailValue,
    password: passwordValue,
  };

  //   Logic to save the data now
  localStorage.setItem("user", JSON.stringify(userObj));

  //   localStorage.setItem("email", emailValue);
  //   localStorage.setItem("password", passwordValue);

  //   window.location.href = "/profile.html";
  //   alert("Email and password set!");
}

document.getElementById("btn").addEventListener("click", login);

console.log("LOCAL STORAGE EMAIL", localStorage.getItem("email"));
console.log("LOCAL STORAGE PASSWORD", localStorage.getItem("password"));

// if (localStorage.getItem("password") && localStorage.getItem("email")) {
//   window.location.href = "/profile.html";
// }

// myUser = "{'email':'avivashishta@gmail.com',password:123456}";
var myUser = JSON.parse(localStorage.getItem("user"));
console.log(myUser);

console.log(myUser.email);
