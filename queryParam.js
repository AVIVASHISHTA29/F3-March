// Problem statement was that I need to pass variables inside urls so that they can be accessed

console.log("Query params");
var url_string = window.location.href;

console.log("url string", url_string);
var url = new URL(url_string);

console.log("My URL", url);

// const url2 = `https://api.github.com/repositories/1296269/issues?page=${pageNumber}&per_page=${perPage}`;

// '/' != '?' in a url
//  / refers to going into a directory -> www.google.com/search
//  '?' refers to that we are in the same directory but we have url params

// searchParams is a property if the object of URL, we can access data that is being passed in our search params

// index.html?search=something&search2=something2
var myQ = url.searchParams.get("search");
var myQ2 = url.searchParams.get("search2");
console.log("Q>>>>>", myQ, myQ2);

document.getElementById("google-searchbar").value = myQ;

function searchFnc() {
  const q = document.getElementById("google-searchbar").value;
  window.location.href = `/index.html?q=${q}`;
}
