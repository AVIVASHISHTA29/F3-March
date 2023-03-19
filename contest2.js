const startBTn = document.getElementById("btn");

function fetchApi(url, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          resolve(data);
        });
    }, time);
  });
}

function promiseAPI1() {
  return fetchApi("https://dummyjson.com/posts", 0);
}
function promiseAPI2() {
  return fetchApi("https://dummyjson.com/products", 2000);
}
function promiseAPI3() {
  return fetchApi("https://dummyjson.com/todos", 3000);
}

promiseAPI1()
  .then((data1) => {
    // show the data
    console.log(data1);
    const myHTML = data1.posts.map((post) => {
      return `
        <div class='post'>
            <h2>ID : ${post.id}</h2>
            <h2>Title : ${post.title}</h2>
        </div>
    `;
    });
    document.getElementById("posts").innerHTML =
      "<h1>Posts</h1><div class='posts-flex'>" + myHTML.join("") + "</div>";
    return promiseAPI2();
  })
  .then((data2) => {
    console.log(data2);
    const myHTML = data2.products.map((product) => {
      return `
            <div class='post'>
                <h2>ID : ${product.id}</h2>
                <h2>Title : ${product.title}</h2>
                <img src='${product.images[0]}' width="100%"/>
            </div>
        `;
    });
    document.getElementById("products").innerHTML =
      "<h1>Products</h1><div class='posts-flex'>" + myHTML.join("") + "</div>";
  });
