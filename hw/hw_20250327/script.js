const starWarsHeroes = [
  { name: "Anakin Skywalker", age: 30, isJedi: true },
  { name: "Luke Skywalker", age: 25, isJedi: true },
  { name: "Han Solo", age: 35, isJedi: false },
  { name: "Princess Leia", age: 30, isJedi: false },
  { name: "Obi-Wan Kenobi", age: 60, isJedi: true },
];

// * Task 1 - новый объект с "возраст не важен"
const starWarsHeroesNew = (list) => {
  return list.map((el) => ({ name: el.name, isJedi: el.isJedi }));
};
console.log("Task 1 - новый объект с 'возраст не важен'\n", starWarsHeroesNew(starWarsHeroes));

// * Task 2 - считаем возраст истинных джедаев
function sumOfStarWarsHeroes(list) {
  return list
    .filter((el) => el.isJedi === true)
    .map((el) => el.age)
    .reduce((acc, current) => acc + current, 0);
}
console.log("Task 2 - считаем возраст истинных джедаев\n", sumOfStarWarsHeroes(starWarsHeroes));

// * Task 3 - фильтр на кризис среднего возроста
const starWarsHeroesYung = (list) => {
  return list.filter((el) => el.age < 40);
};
console.log("Task 3- фильтр на кризис среднего возроста\n", starWarsHeroesYung(starWarsHeroes));

// * Task 4 - прибовляем всем +10 лет
const value = 10;
const starWarsHeroesGrownUp = (list, value) => {
  return list.map((el) => ({ name: el.name, age: el.age + value, isJedi: el.isJedi }));
};
console.log("Task 4 - прибовляем всем +10 лет\n", starWarsHeroesGrownUp(starWarsHeroes, value));

// * Task 5 - переход на тёмную сторону
function starWarsHeroesDarkSide(list) {
  const result = list.slice(1);
  result.unshift({ name: "Darth Vader", isJedi: false, age: 50 });
  return result;
}
console.log("Task 5 - переход на тёмную сторону\n", starWarsHeroesDarkSide(starWarsHeroes));
