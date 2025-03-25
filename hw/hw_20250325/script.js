let h3 = document.createElement("h3");
h3.innerText = "Homework 25.03.2025";
h3.style.color = "rgb(193, 49, 5)";

let resultStr = document.createElement("p");
resultStr.innerText = "Result:";
resultStr.style.fontWeight = "bold";

document.body.append(h3, resultStr);

// 1
let myNumber = document.createElement("p");
myNumber.innerText = String("1. ") + 100 / (25 % 3);
document.body.append(myNumber);

// 2
let year = 2024;
let myString = document.createElement("p");
myString.innerText = String("2. ") + `Hello, ${year} world!`;
document.body.append(myString);

// 3
let isHuman = document.createElement("p");
isHuman.innerText = String("3. ") + (42 !== "42");
document.body.append(isHuman);

// 4
let myNumber2 = document.createElement("p");
myNumber2.innerText = String("4. ") + parseInt("123smth");
document.body.append(myNumber2);

console.log("Что ты тут ищешь?");
