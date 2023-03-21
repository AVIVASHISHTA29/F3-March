if (!localStorage.getItem("currentUser")) {
  window.location.href = "/signup.html";
}

function logout() {
  //   localStorage.setItem("currentUser", "");
  localStorage.removeItem("currentUser");
}

var currentUser = JSON.parse(localStorage.getItem("currentUser"));

document.getElementById("email-h2").innerText = currentUser.email;
document.getElementById("password-h2").innerText = currentUser.password;
