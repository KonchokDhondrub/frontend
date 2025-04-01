let imgContainer;
const refreshBtn = document.getElementById("btn-refresh");
const main = document.querySelector("main");

refreshBtn.addEventListener("click", () => {
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

createImageContainer();
foxes();
setInterval(() => {
  clearImages();
  foxes();
}, 10000);
