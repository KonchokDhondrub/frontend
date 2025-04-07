const gridContainer = document.querySelector(".grid-container");

const getNews = async () => {
  const res = await fetch("https://newsapi.org/v2/everything?q=zoo+otter&from=2025-03-07&sortBy=publishedAt&apiKey=b99bfac3612f40f6bb28dfab990cde8d");
  const data = await res.json();
  data.articles.slice(1, 12).map((el) => {
    const card = document.createElement("section");
    const p = document.createElement("p");
    p.textContent = el.title;
    const img = document.createElement("img");
    img.src = el.urlToImage || "fallback.png";
    const a = document.createElement("a");
    a.href = el.url;
    a.target = "_blank";
    a.textContent = "link to source";
    card.append(p, img, a);
    gridContainer.append(card);
  });
};

getNews();

