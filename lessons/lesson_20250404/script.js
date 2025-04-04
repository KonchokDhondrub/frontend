const gridContainer = document.querySelector(".grid-container");
const loader = document.querySelector(".loader");
const btnReset = document.querySelector("#btn-reset");
const amount = 30;

const cartCountElem = document.getElementById("cart-count");
let cartCount = 0;
const cartProductIds = [];

let reqCount = 0;
const maxLoads = 20;

async function getProducts(amount) {
  if (reqCount >= maxLoads) {
    showCustomAlert("Limit reached");
    return;
  }

  try {
    reqCount++;

    const res = await fetch(`https://dummyjson.com/products?limit=${amount}`);
    if (!res.ok) throw new Error(`status: ${res.status}, Status text: ${res.statusText ? res.statusText : ""}`);

    const data = await res.json();
    loader.classList.toggle("hide");
    gridContainer.classList.remove("hide");

    console.log(data.products);

    productBox(data.products);
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
}

function productBox(data) {
  data.map((product) => {
    const section = document.createElement("section");

    // brand
    const brand = document.createElement("h3");
    brand.textContent = product.brand;

    const title = document.createElement(product.brand ? "h4" : "h3");
    title.textContent = product.title;

    // image
    const img = document.createElement("img");
    img.src = product.thumbnail;

    // ratingAndReview
    const ratingAndReview = document.createElement("div");
    ratingAndReview.className = "rating-and-review";

    const rating = document.createElement("a");
    rating.className = "rating";
    rating.href = "#";
    rating.innerText = "Rating: " + product.rating;

    const review = document.createElement("a");
    review.className = "review";
    review.href = "#";
    review.innerText = "Review: " + product.reviews.length;

    // Description
    const description = document.createElement("p");
    description.className = "description";
    description.innerText = product.description;

    //Price
    const price = document.createElement("p");
    price.className = "price";
    price.innerText = product.price + " $";

    // add button
    const addToCartButton = document.createElement("button");
    addToCartButton.classList.add("add-to-cart");
    addToCartButton.textContent = "Добавить в корзину";
    add(addToCartButton, product);

    ratingAndReview.append(rating, review);
    section.append(product.brand ? brand : "", title, img, ratingAndReview, description, price, addToCartButton);
    gridContainer.append(section);
  });
}

function add(addToCartButton, product) {
  addToCartButton.addEventListener("click", () => {
    cartCount++;
    cartCountElem.textContent = cartCount;
    cartProductIds.push(product.id);

    console.log(cartProductIds);
  });
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
  if (amount < 1 || amount > 30) {
    showCustomAlert("Число может быть только от 1 до 20");
    loader.classList.toggle("hide");
  } else {
    setTimeout(() => {
      getProducts(amount);
    }, 1000);
  }

  console.log(amount);
}

function showCustomAlert(message) {
  const alertBox = document.createElement("div");
  alertBox.innerText = message;
  alertBox.style.position = "fixed";
  alertBox.style.top = "8%";
  alertBox.style.left = "50%";
  alertBox.style.transform = "translateX(-50%)";
  alertBox.style.background = "rgb(176, 1, 1)";
  alertBox.style.color = "#fff";
  alertBox.style.fontSize = "20px";
  alertBox.style.fontWeight = "bold";
  alertBox.style.padding = "20px 40px";
  alertBox.style.borderRadius = "5px";
  alertBox.style.zIndex = "1000";

  document.body.appendChild(alertBox);

  setTimeout(() => {
    alertBox.remove();
  }, 2500);
}
/*
      name
      thumbnail
      rating
      review  (size)
      price
      button (add to basket)
*/

const burgerMenu = document.querySelector("#burger-menu-btn");
let isOpen = false;

burgerMenu.addEventListener("click", (event) => {
  const menuBox = document.querySelector(".burger-menu");
  isOpen = !isOpen;
  burgerMenu.textContent = isOpen ? "X" : "☰";
  menuBox.classList.toggle("hide");
});
