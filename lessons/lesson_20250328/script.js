// * Counter
const minus = document.getElementById("btn-minus");
const plus = document.getElementById("btn-plus");
const value = document.getElementById("value");

// console.log(btn_minus, btn_plus, value);

let counter = 0;

const handlePlus = () => {
  counter++;
  value.innerText = counter;
};

const handleMinus = () => {
  counter--;
  value.innerText = counter;
};

plus.addEventListener("click", handlePlus);
minus.addEventListener("click", handleMinus);

// * ToDo
const form = document.getElementById("form-todo");
const ul = document.getElementById("list-todo");
const taskList = [];

function createList() {
  taskList.map((el) => {
    const li = document.createElement("li");
    li.onclick = changeStatus;
    li.innerText = `Что: ${el.what}, где: ${el.where}`;
    ul.append(li);
  });
}

function clearList() {
  while (ul.hasChildNodes()) {
    ul.firstChild.remove();
  }
}

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
    where: event.target.where.value.toLowerCase(),
    what: event.target.what.value.toLowerCase(),
  };
  event.target.where.value = "";
  event.target.what.value = "";

  const check = taskList.find((el) => el.what === task.what && el.where === task.where);

  if (check) {
    alert("Task already added!");
  } else {
    taskList.push(task);
    clearList();
    createList();
  }

  handlePlus();
});
