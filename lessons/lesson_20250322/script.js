// Вывод данных в консоль
// Выводим в консоль объект Document
// в нём описаны все элементв и их свойства на странице
// * console.log(document);
// * console.dir(document);

// * console.log("Hello JS!");

// * console.log(document.body);

let heading = document.getElementById("heading");
heading.innerText = "Урок 9: ДОМ методы";
heading.style.color = "blue";
heading.style.fontStyle = "italic";

let descInfo = document.getElementsByClassName("desc-info");

// Находим список элементов с данным классом
// * console.log(descInfo);

// Для обращения нужно использовать index "[0...]"
descInfo[0].style.color = "red";

let bttnchangeh1 = document.getElementById("bttn-change-h1");

// Добавляем событие
bttnchangeh1.addEventListener("click", () => {
  if (heading.style.color === "red") {
    heading.style.color = "blue";
  } else {
    heading.style.color = "red";
  }
});

let bttnCreate = document.getElementById("bttn-create");

bttnCreate.addEventListener("click", () => {
  let existingElement = document.querySelector(".dom-text");

  if (existingElement) {
    existingElement.remove();
  } else {
    let newElement = document.createElement("p");
    newElement.innerText = "Кажется, я начинаю понимать этот DOM...";
    newElement.classList.add("dom-text");
    document.body.append(newElement);
  }
});
