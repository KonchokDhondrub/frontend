const main = document.querySelector("main");
const form = document.getElementById("form");
const box = document.createElement("div");
let requestCount = 0;
const maxRequests = 10;

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = event.target.name.value;
  box.innerHTML = "";
  getCharacters(name);
});

async function getCharacters(name) {
  if (requestCount >= maxRequests) {
    alert("Достигнут лимит запросов!");
    return;
  }
  requestCount++;

  const res = await fetch(`https://api.genderize.io/?name=${name}`);
  const data = await res.json();

  console.log(data);

  if (data.error) {
    console.error(data.error);
    alert("Data Error!");
    return;
  }

  const h3 = document.createElement("h3");
  h3.textContent = `Name: ${data.name}`;
  box.append(h3);

  const p1 = document.createElement("p");
  p1.textContent = `Count: ${data.count}`;
  box.append(p1);

  const p2 = document.createElement("p");
  p2.textContent = `Gender: ${data.gender} ${getIconGender(data)}`;
  box.append(p2);

  const p3 = document.createElement("p");
  p3.textContent = `Probability: ${data.probability * 100}%`;
  box.append(p3);

  main.append(box);
}

function getIconGender(data) {
  return data.gender === "male" ? "👨" : data.gender === "female" ? "👩" : "❓";
}

//   count: 402427,
//   name: "jane",
//   gender: "female",
//   probability: 0.99
