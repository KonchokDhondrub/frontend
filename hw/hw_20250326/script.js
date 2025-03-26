// Task form create

for (let i = 1; i < 5; i++) {
  let h3 = document.createElement("h3");
  h3.innerText = "Task " + i;

  let div = document.createElement("div");
  div.id = i;

  document.body.append(h3, div);
}

// Task 1
let taskId = 1;

const namesArray = ["Семен", "Иван", "Петр", "Татьяна"];
const agesArray = [18, 27, 74, 34];

const namesAndAgesArray = [];

for (let i = 0; i < namesArray.length; i++) {
  if (namesArray.length === agesArray.length) {
    namesAndAgesArray.push(namesArray[i] + " " + agesArray[i] + " лет/года");
    // console.log(namesArray[i] + " " + agesArray[i]);
  } else {
    console.log("Err: Array's length not similar");
  }
}

for (let i = 0; i < namesAndAgesArray.length; i++) {
  let result = document.createElement("li");
  result.innerText = namesAndAgesArray[i];
  document.getElementById(taskId).append(result);
  //   console.log(namesAndAgesArray[i]);
}

// Task 2
taskId = 2;

for (let i = namesAndAgesArray.length; i > 0; i--) {
  let result = document.createElement("li");
  result.innerText = namesAndAgesArray[i - 1];
  document.getElementById(taskId).append(result);
  //   console.log(namesAndAgesArray[i - 1]);
}

// Task 3
taskId = 3;

const fruits = [];
fruits.push("яблоко", "банан", "апельсин"); // Adding object to Array

let result = document.createElement("p");
result.innerHTML = "Array created: <i>" + fruits.join(", ") + "</i>";
document.getElementById(taskId).append(result);

result = document.createElement("p");
result.innerHTML = "Then: <i>fruits.unshift(fruits.pop());</i>";
document.getElementById(taskId).append(result);

fruits.unshift(fruits.pop()); // Moving object

for (let i = 0; i < fruits.length; i++) {
  let result = document.createElement("li");
  result.innerText = fruits[i];
  document.getElementById(taskId).append(result);
}

// Task 4
taskId = 4;
const veggies = [];
veggies.push("брокколи", "морковь");

const fruitsAndVeggies = [...fruits, ...veggies, "картошка"];
let [fruit1, fruit2, fruit3, veggie1, veggie2, veggie3] = fruitsAndVeggies;

for (let i = 0; i < fruitsAndVeggies.length; i++) {
  let li = document.createElement("li");
  li.innerText = fruitsAndVeggies[i];
  document.getElementById(taskId).append(li);
}

let details = document.createElement("p");
details.innerHTML = `Фрукты: <i>${fruit1}, ${fruit2}, ${fruit3}</i><br>Овощи: <i>${veggie1}, ${veggie2}, ${veggie3}</i>`;

document.body.append(details);

console.log(fruitsAndVeggies);
console.log(fruit1, fruit2, fruit3, veggie1, veggie2, veggie3);
