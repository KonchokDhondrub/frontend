const main = document.querySelector("main");
const form = document.getElementById("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = event.target.name.value;

  getCharacters(name);
});

async function getCharacters(name) {
  const res = await fetch(`https://api.genderize.io/?name=${name}`);
  const data = await res.json();

  console.log(data);

  if (data.error) {
    console.error(data.error);
    return;
  }

  const box = document.createElement("div");

  const h2 = document.createElement("h2");
  h2.textContent = `Name: ${data.name}`;
  box.append(h2);

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
