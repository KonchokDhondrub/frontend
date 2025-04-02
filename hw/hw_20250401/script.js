let imgContainer;
const refreshBtn = document.getElementById("btn-refresh");
const main = document.querySelector("main");

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
  imgContainer = document.createElement("div");
  main.appendChild(imgContainer);
}

function clearImages() {
  if (imgContainer) {
    imgContainer.innerHTML = "";
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
      const img = document.createElement("img");
      img.src = data.image;
      imgContainer.appendChild(img);
    })
    .catch((error) => {
      console.log(error);
    });
}
