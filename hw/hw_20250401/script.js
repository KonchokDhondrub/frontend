let imgContainer = document.createElement("div");
imgContainer.className = "fox-wrapper";
const refreshBtn = document.getElementById("btn-refresh");
const main = document.querySelector("main");
const img = document.createElement("img");

createImageContainer();
getdata();

const container = setInterval(() => {
  getdata();
}, 8000);

refreshBtn.addEventListener("click", getdata);

function createImageContainer() {
  main.appendChild(imgContainer);
}

function getdata() {
  fetch("https://randomfox.ca/floof/")
    .then((res) => {
      if (!res.ok) {
        throw new Error(`Ошибка: ${res.status} ${res.statusText}`);
      }
      return res.json();
    })
    .then((data) => {
      img.src = data.image;
      imgContainer.appendChild(img);
    })
    .catch((error) => {
      console.error("Ошибка в запросе: " + error.message);
      clearInterval(container);
    });
}
