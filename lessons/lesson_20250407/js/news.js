// const gridContainer = document.querySelector('.grid-container')

// const getNews = async () => {
//   const res = await fetch("https://newsapi.org/v2/everything?q=zoo+otter&from=2025-03-07&sortBy=publishedAt&apiKey=b99bfac3612f40f6bb28dfab990cde8d");
//   const data = await res.json();
//   data.articles.slice(1,12).map((el) => {
//     const card = document.createElement('section')
//     const p = document.createElement("p");
//     p.textContent = el.title;
//     const img = document.createElement('img')
//     img.src = el.urlToImage
//     const a = document.createElement('a')
//     a.href = el.url
//     a.target = '_blank'
//     a.textContent = 'link to source'
//     card.append(p, img, a)
//     gridContainer.append(card)
//   });
// };

const input = "The sunset sets at twelve o' clock.";

// function alphabetPosition(text) {
//   // -40
//   const res = text.toLowerCase().split(" ").join("").split("");
//   let result = "";
//   // let result2 = result.join(" ")
//   for (let i = 0; i < res.length; i++) {
//     result = result + " " + res[i].charCodeAt()-40;
//   }
//   return result;
// }

function alphabetPosition(text) {
  return text
    .toLowerCase()
    .split("")
    .filter((c) => c >= "a" && c <= "z")
    .map((c) => c.charCodeAt(0) - 96)
    .join(" ");
}

console.log(alphabetPosition(input));

console.log(alphabetPosition(input));
console.log("asda");
