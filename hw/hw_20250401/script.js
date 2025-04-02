let imgContainer = document.createElement("div");
const refreshBtn = document.getElementById("btn-refresh");
const main = document.querySelector("main");
const img = document.createElement("img");

createImageContainer();
foxes();

const container = setInterval(() => {
  clearImages();
  foxes();
}, 8000);

refreshBtn.addEventListener("click", () => {
  clearInterval(container);
  clearImages();
  foxes();
});

function createImageContainer() {
  main.appendChild(imgContainer);
}

function clearImages() {
  if (img) {
    img.src = "";
  }
}

function foxes() {
  fetch("https://randomfox.ca/floof/")
    .then((res) => {
      if (!res.ok) {
        throw new Error(`Ошибка: ${res.status}`);
      }
      return res.json();
    })
    .then((data) => {
      img.src = data.image;
      imgContainer.appendChild(img);
    })
    .catch((error) => {
      console.log(error);
    });
}
