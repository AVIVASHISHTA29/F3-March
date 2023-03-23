console.log("API");

// const url = "https://www.facebook.com/";
// const headers = { method: "GET" };

// fetch(url, headers)
//   .then((res) => {
//     console.log("res", res);
//     return res.json();
//     // res.json() is a function of the prototype of RESPONSE obj
//   })
//   .then((data) => {
//     console.log("Data", data);
//   });

//   Client to Server -> Client sends a Request Package to Server
//   Server to Client -> Server sends a Response Package to Client

// Response Object = Response Package -> status, ok,url, data? = .json()

const url = "https://dummyjson.com/products/add";

const options = {
  method: "POST", // what is my intention -> POST = Create
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    title: "BMW Pencil",
    description: "BMWs official pencil is out",
    price: 100000,
    discountPercentage: 0.5,
    rating: 5.0,
    stock: 10,
    brand: "BMW",
  }),
};

// what does fetch actually do? Fetch allows me to send a request package to a server
fetch(url, options)
  .then((res) => {
    console.log(res);
    return res.json();
  })
  .then((data) => console.log(data));

//   Request Package -> Header, Body

// Server knows 4 things ->
// What URL is the request package going to
// What is the Intention? (Method)
// What is Content-Type that Client is sending
// What is the body? (The content being sent)

// fetch("https://dummyjson.com/products/1", {
//   method: "PUT" /* or PATCH */, // -> Update the data
//   headers: { "Content-Type": "application/json" },
//   body: JSON.stringify({
//     title: "iPhone Galaxy +1",
//   }),
// })
//   .then((res) => res.json())
//   .then(console.log);

// product = {
//   title,
//   price,
//   desc,
//   image,
// };

// newProduct = {
//   title: "iPhone Galaxy +1",
// };

// newProduct = {
//   title: "iPhone Galaxy +1",
//   price,
//   desc,
//   image,
// };

fetch("https://dummyjson.com/products/1", {
  method: "POST",
})
  .then((res) => res.json())
  .then(console.log);

//   Server gets a request on a url ->
// first step -> If( method =="GET"){} else if( method =="PUT"){} else if( method =="DELETE") else { return error(404)}
