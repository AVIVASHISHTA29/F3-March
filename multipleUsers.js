// Problem Statement
// 1. Create A Signup page where multiple users can signup.
// 2. As soon as the signup maintain an array of all the users which have signed up.
// 3. Login the user once they signup and take them to the profile page
// 4. Make a currentUser obj to keep a track of the current user
// 5. On logout delete the currentUser object.

function SignUp() {
  var emailValue = document.getElementById("input-email").value;
  var passwordValue = document.getElementById("input-password").value;
  var confirmPasswordValue = document.getElementById(
    "input-confirm-password"
  ).value;

  if (passwordValue == confirmPasswordValue) {
    // sign the user up

    var userObj = {
      email: emailValue,
      password: passwordValue,
      signupDate: new Date(),
    };

    var users = [];

    if (localStorage.getItem("users")) {
      users = JSON.parse(localStorage.getItem("users"));
    } else {
      users = [];
    }

    // if user has not already signed up - otherwise give the error that user has already signed up
    users.push(userObj);

    localStorage.setItem("users", JSON.stringify(users));

    window.location.href = "/login.html";
  }
}

document.getElementById("btn").addEventListener("click", SignUp);

console.log(JSON.parse(localStorage.getItem("users")));

if (localStorage.getItem("currentUser")) {
  window.location.href = "/profile.html";
}
