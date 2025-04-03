const gridContainer = document.querySelector(".grid-container");
const loader = document.querySelector(".loader");
const btnReset = document.querySelector("#btn-reset");
const amount = 20;

let reqCount = 0;
const maxLoads = 10;

async function getProducts(amount) {
  if (reqCount >= maxLoads) {
    showCustomAlert("Limit reached");
    return;
  }

  try {
    reqCount++;

    const res = await fetch(`https://fakestoreapi.com/products?limit=${amount}`);
    if (!res.ok) throw new Error(`status: ${res.status}, Status text: ${res.statusText ? res.statusText : ""}`);

    const data = await res.json();
    loader.classList.toggle("hide");
    gridContainer.classList.remove("hide");

    data.map((product) => {
      const section = document.createElement("section");
      const h3 = document.createElement("h3");
      h3.textContent = product.title;

      const img = document.createElement("img");
      img.src = product.image;

      section.append(h3, img);
      gridContainer.append(section);
    });

    console.log(data);
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
}

setTimeout(() => {
  getProducts(amount);
}, 500);

btnReset.addEventListener("click", () => {
  btnAll(20);
});

function btnAll(amount) {
  gridContainer.innerHTML = "";
  loader.classList.toggle("hide");
  gridContainer.classList.toggle("hide");

  setTimeout(() => {
    getProducts(amount);
  }, 1500);
}

form.addEventListener("submit", (event) => {
  setAmount(event);
});

function setAmount(event) {
  gridContainer.innerHTML = "";
  loader.classList.toggle("hide");
  event.preventDefault();
  const amount = event.target.amount.value;
  if (amount < 1 || amount > 20) {
    showCustomAlert("Число может быть только от 1 до 20");
  }
  setTimeout(() => {
    getProducts(amount);
  }, 1000);

  console.log(amount);
}

function showCustomAlert(message) {
  const alertBox = document.createElement("div");
  alertBox.innerText = message;
  alertBox.style.position = "fixed";
  alertBox.style.top = "20%";
  alertBox.style.left = "50%";
  alertBox.style.transform = "translateX(-50%)";
  alertBox.style.background = "rgb(221, 7, 7)";
  alertBox.style.color = "#fff";
  alertBox.style.fontSize = "20px";
  alertBox.style.fontWeight = "bold";
  alertBox.style.padding = "20px 40px";
  alertBox.style.borderRadius = "5px";
  alertBox.style.zIndex = "1000";

  document.body.appendChild(alertBox);

  setTimeout(() => {
    alertBox.remove();
  }, 2000);
}

/*{
    "id": 0,
    "title": "",
    "price": 0,
    "description": "",
    "category": "",
    "image": "",
    "rating": {
        "rate": 0,
        "count": 0
  }*/
