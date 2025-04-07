fetch("https://hp-api.onrender.com/api/characters")
  .then((res) => res.json())
  .then((data) => {
    const shortHeroes = data.slice(0, 50);

    shortHeroes.splice(1, 10);
    // console.log(shortHeroes.length);

    const hero = shortHeroes[0];
    // console.log(hero.name.indexOf("ry"));

    data.map((el) => {
      const actor = el.actor;
      const indexOfSpace = actor.indexOf(" ");
      const firstWord = indexOfSpace !== -1 ? actor.slice(0, indexOfSpace) : actor;
      // console.log(firstWord);
    });

    const capsLockName = hero.actor.toUpperCase().slice(0, 6);

    const formattedName = capsLockName.charAt(0).toUpperCase() + capsLockName.toLowerCase().slice(1);

    // console.log(hero.house.split("").reverse().join(""));

    // Object.keys(hero)
    //   .slice(0, 4)
    //   .map((el) => {
    //     const p = document.createElement("p");
    //     p.textContent = `Поле: ${el}`;
    //     document.body.appendChild(p);
    //   });

    // for (const key in hero) {
    //   console.log(`Ключь: ${key} - это значение: ${hero[key]}`);
    // }
  });
