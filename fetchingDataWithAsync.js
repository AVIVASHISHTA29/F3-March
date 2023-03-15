console.log("Fetching with async");

async function getData() {
  document.getElementById("loading").style.display = "flex";
  const response = await fetch("https://dummyjson.com/quotes");
  const data = await response.json();
  if (data) {
    document.getElementById("loading").style.display = "none";
    const myHtml = data.quotes.map((item) => {
      return `
            <div class='quote-box'>
                <h2>${item.id}. ${item.author}</h2>
                <p>${item.quote}</p>
            </div>
    `;
    });
    document.getElementById("container").innerHTML = myHtml.join("");
  }
}

getData();
