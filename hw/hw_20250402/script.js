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

  const p = document.createElement("p");
  p.textContent = `Count: ${count}`;
  box.append(p);

  const p1 = document.createElement("p1");
  p2.textContent = `Gender: ${data.gender} ${getIconGender(data)}`;
  box.append(p);

  const p2 = document.createElement("p2");
  p.textContent = `Probability: ${probability * 100}%`;
  box.append(p);

  main.append(box);
}

function getIconGender(data) {
  return data.gender === "male" ? "👨" : "👩";
}

//   count: 402427,
//   name: "jane",
//   gender: "female",
//   probability: 0.99
