const gridContainer = document.querySelector(".grid-container");

// ! Реализация на синтаксисе .then()

// fetch("https://rickandmortyapi.com/api/character?page=1")
//   .then((res) => res.json())
//   .then((data) => {
//     data.results.map((character) => {
//       console.log(character);
//       const section = document.createElement("section");
//       section.textContent = `${character.name} \n from (${character.location.name})`;
//       document.body.append(section);
//     });
//   });

// ! Реализация на синтаксисе async / await (асинхронные функции)

async function getCharacters() {
  const res = await fetch("https://rickandmortyapi.com/api/character?page=1");
  const data = await res.json();

  data.results.map((character) => {
    const section = document.createElement("section");
    const h2 = document.createElement("h2");
    h2.textContent = `${character.name} \n from (${character.location.name})`;
    section.append(h2);

    const p = document.createElement("p");
    p.textContent = `Status: ${character.species}, status: ${character.status}`;
    section.append(p);

    const img = document.createElement("img");
    img.src = character.image;
    section.append(img);

    gridContainer.append(section);
  });
}
getCharacters();
