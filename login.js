function login() {
  var emailValue = document.getElementById("input-email").value;
  var passwordValue = document.getElementById("input-password").value;

  var users = JSON.parse(localStorage.getItem("users"));
  //   console.log(users);
  //   console.log(JSON.parse(users));
  //   console.log("TYpe", typeof users);

  //   Get the user which is trying to log in. Filter on the basis of email
  var myUserArr = users.filter((item) => item.email == emailValue);
  //   Filter returns an array
  var myUser = myUserArr[0];

  console.log("USER TRYING TO LOG IN", myUser);

  if (passwordValue == myUser.password) {
    localStorage.setItem("currentUser", JSON.stringify(myUser));
    window.location.href = "/profile.html";
  } else {
    alert("INCORRECT PASSWORD");
  }
  //   if (passwordValue == confirmPasswordValue) {
  //     window.location.href = "/login.html";
  //   }
}

document.getElementById("login-btn").addEventListener("click", login);
