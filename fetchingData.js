console.log("fetching Data");
// Fetch is an inbuilt method provided by the BROWSER which returns a promise.

// FETCH is this method that we use to receive data from the url that we pass in the param

// FETCH  returns a RESPONSE object.

// The response.json() method reads the data returned by the server and returns a Promise.

// fetch("https://dummyjson.com/quotes")
//   .then((response) => response.json())
//   .then((data) => {
// DO WHATEVER YOU WANT TO WITH THAT DATA
// });

// fetch("https://dummyjson.com/quotes")
//   .then((response) => response.json())
//   .then((data) => {
//     console.log("DATA>>>", data);
//     let myArr = data.quotes;
//     let myDiv = document.getElementById("results");
//     myArr.map((quote) => {
//       myDiv.innerHTML += `<p><strong>${quote.id} - ${quote.author} </strong> ${quote.quote}</p>`;
//     });
//   });

fetch("https://dummyjson.com/quotes")
  .then((res) => res.json())
  .then((data) => {
    console.log("Data", data);
    const quotes = data.quotes;
    console.log("My Quotes", quotes);
    const myHTML = quotes.map((item) => {
      return `
        <div class='quote-box'>
            <h2>${item.id}. ${item.author}</h2>
            <p>${item.quote}</p>
        </div>
      `;
    });

    var appendedHTML = "";
    for (let i in quotes) {
      appendedHTML += `
        <div class='quote-box'>
            <h2>${quotes[i].id}. ${quotes[i].author}</h2>
            <p>${quotes[i].quote}</p>
        </div>
      `;
    }

    document.getElementById("container").innerHTML = myHTML.join("");
    document.getElementById("container").innerHTML = appendedHTML;
  });

console.log("still fetching Data...");
