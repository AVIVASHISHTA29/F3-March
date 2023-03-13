console.log("hi");

// create an input field where the user puts a username and as soon as the search button is clicked.
//  Create a function called getUsernameData which returns a promise
// that gets resolved in 1500 milliseconds and it returns a user object

// function getUsernameData(myInput) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (myInput == "avi_29") {
//         resolve({
//           name: "Avi",
//           job: "Instructor",
//           mobile: "9282199672",
//           username: "avi_29",
//         });
//       } else {
//         reject("Username Not Correct");
//       }
//     }, 1500);
//   });
// }

// function fetchData() {
//   const myInput = document.getElementById("user-input").value;
//   console.log("Searching for....", myInput);
//   document.getElementById("container").innerHTML = "";
//   getUsernameData(myInput)
//     .then((res) => {
//       console.log("Search Results =", res);
//       document.getElementById("container").innerHTML =
//         "User Name = " + res.name + "<br/> User Job = " + res.job;
//     })
//     .catch((e) => {
//       console.log("e", e);
//       document.getElementById(
//         "container"
//       ).innerHTML = `<p style='color:red'>${e}</p>`;
//     });
// }

function myPromiseFnc() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise Resolved");
    }, 1000);
  });
}

myPromiseFnc().then((data) => console.log("data", data));
