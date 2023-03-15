console.log("Fetching with async");

fetch("https://dummyjson.com/quotes")
  .then((response) => response.json())
  .then((data) => {
    console.log("Data", data);
    // DO WHATEVER YOU WANT TO WITH THAT DATA
  });

async function getData() {
  console.log("getting data");
  const response = await fetch("https://dummyjson.com/quotes");
  const data = await response.json();
  console.log("Data", data);
  showData(data);
}

getData();

function showData(data) {
  // DOM Maniupilation
}
