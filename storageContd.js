// Save these 30 quotes in our localStorage and
// so that if the quotes exists in the storage we dont fetch the quotes again
if (localStorage.getItem("myQuotes")) {
  // DONT FETCH THE DATA
  console.log("DATA IN STORAGE");
  const myQuotes = JSON.parse(localStorage.getItem("myQuotes"));
  showData(myQuotes);
} else {
  fetch("https://dummyjson.com/quotes")
    .then((res) => res.json())
    .then((data) => {
      console.log("DATA NOT IN STORAGE");
      console.log("DATA FROM FETCHING", data.quotes);
      //   Set the item for future
      localStorage.setItem("myQuotes", JSON.stringify(data.quotes));
      showData(data.quotes);
    });
}

function showData(quotes) {
  var orderedList = document.getElementById("quotes-id");
  quotes.map((item) => {
    var listItem = document.createElement("li");
    listItem.innerHTML = item.quote;
    orderedList.appendChild(listItem);
  });
}

// console.log(localStorage.getItem("myQuotes"));
// console.log(JSON.parse(localStorage.getItem("myQuotes")));

// var obj = {
//   name: "avi",
//   age: "21",
// };

// var obj2 = "{'name':'avi','age':'21'}";

// JSON.stringify(obj)  ->  "{'name':'avi','age':'21'}"

// JSON.parse(obj2) -> {
//   name: "avi",
//   age: "21",
// };

// str = "Hi";
// encrypted = encrypt(str);
// // encrypted = 219871wgsh1gwfvhjbgvfqghjkqgsyftsakljhuygwtq
// decrypt = "Hi";

// // Hashing>
// // 1234
// var hashedPass = hash("12345");
// // hashedPass = qsiugaasgfyhsajh

// iat = issued At
// expAt = expired At
