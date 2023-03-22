console.log("Session storage");

var email = "avi@gmail.com";
// localStorage.setItem("email", email);
sessionStorage.setItem("email", email);

console.log("Local Storage", localStorage.getItem("email"));
console.log("Session Storage", sessionStorage.getItem("email"));

// Session Storage automatically gets deleted once the tab is closed (or the session has ended)
// Session Storage is there if i reload -> the data is there
// New tab but with the same url - > again data is lost
