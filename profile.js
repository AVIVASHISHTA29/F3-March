if (!localStorage.getItem("password")) {
  window.location.href = "/index.html";
}

document.getElementById("email-h2").innerText = localStorage.getItem("email");
document.getElementById("password-h2").innerText =
  localStorage.getItem("password");
