const form = document.getElementById("form-fav-books");
const ul = document.getElementById("list-fav-books");
const clearBtn = document.getElementById("btn-clear");
const taskList = [
  {
    book: "Имя мое Легион",
    author: "Климов Григорий Петрович",
  },
  {
    book: "Две жизни.",
    author: "Конкордия Антарова",
  },
  {
    book: "Творящая доброта, ясность света сознания и проникновенное понимание сути",
    author: "Далай-лама XIV",
  },
];

function createList() {
  taskList.map((el) => {
    const li = document.createElement("li");
    li.onclick = changeStatus;
    li.innerHTML = `${el.book}<br> от ${el.author}`;
    ul.append(li);
  });
}

function clearList() {
  while (ul.hasChildNodes()) {
    ul.firstChild.remove();
  }
}

clearBtn.addEventListener("click", () => {
  taskList.length = 0;
  clearList();
});

const changeStatus = (event) => {
  if (event.target.style.textDecoration === "line-through") {
    event.target.style.textDecoration = "none";
    handlePlus();
  } else {
    event.target.style.textDecoration = "line-through";
    handleMinus();
  }
};

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let task = {
    author: event.target.author.value.toLowerCase(),
    book: event.target.book.value.toLowerCase(),
  };
  event.target.author.value = "";
  event.target.book.value = "";

  const check = taskList.find((el) => el.book === task.book && el.author === task.author);

  if (check) {
    showCustomAlert("Эта книга уже в списке!");
  } else {
    taskList.push(task);
    clearList();
    createList();
  }

  handlePlus();
});

function showCustomAlert(message) {
  const alertBox = document.createElement("div");
  alertBox.innerText = message;
  alertBox.style.position = "fixed";
  alertBox.style.top = "20%";
  alertBox.style.left = "50%";
  alertBox.style.transform = "translateX(-50%)";
  alertBox.style.background = "rgb(221, 7, 7)";
  alertBox.style.color = "#fff";
  alertBox.style.fontWeight = "bold";
  alertBox.style.padding = "20px 40px";
  alertBox.style.borderRadius = "5px";
  alertBox.style.zIndex = "1000";

  document.body.appendChild(alertBox);

  setTimeout(() => {
    alertBox.remove();
  }, 2000);
}

createList();
