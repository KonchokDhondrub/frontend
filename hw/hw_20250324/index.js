// найдем первую кнопку по id
const btn = document.getElementById("magic-btn");
// скопируем ее - получилась вторая кнопка. Ее можно использовать.

const clonedBtn = btn.cloneNode(true);
clonedBtn.id = "magic-btn-2";
clonedBtn.classList.add("second-btn");
clonedBtn.innerText = "Я изменю тебя";

btn.addEventListener("click", () => {
  let existingElement = document.getElementById("magic-btn-2");

  if (existingElement) {
    existingElement.remove();
  } else {
    document.body.append(clonedBtn);
  }

  //   let newElement = document.createElement("button");
  //   newElement.innerText = "Я изменю тебя";
  //   newElement.classList.add("second-btn");
  //   newElement.id = "magic-btn-2";
  //   document.body.appendChild(newElement);

  //   newElement.addEventListener("click", () => {
  //     btn.style.backgroundColor = "#9c4a1a";
  //     btn.style.color = "black";
  //   });
});

clonedBtn.addEventListener("click", () => {
  btn.style.backgroundColor = "#9c4a1a";
  btn.style.color = "black";
});

console.dir(document);
