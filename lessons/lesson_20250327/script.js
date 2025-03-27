const brothers = [
  { name: "Gandalf", height: 160, hasMagic: true, race: "mayia", age: 2500 },
  { name: "Legolas", height: 170, hasMagic: true, race: "elf", age: 1000 },
  { name: "Frodo", height: 60, hasMagic: false, race: "hobbit", age: 30 },
  { name: "Saruman", height: 155, hasMagic: true, race: "maia", age: 2000 },
  { name: "Aragorn", height: 160, hasMagic: false, race: "human", age: 120 },
  { name: "Sam", height: 63, hasMagic: false, race: "hobbit", age: 32 },
];

const hero = [{ name: "Arwen", height: 175, hasMagic: true, race: "elf", age: 850 }];

brothers.push(...hero);

// * матод map()

// * создаём массив из имён наших героев
const brothersNames = brothers.map((el) => "Hero " + el.name);

const namesAndAges = brothers.map((el) => el.name + ": " + el.age);

const brothers1 = brothers.filter((el) => el.age > 1000 && el.hasMagic === false);

// * find() - возвращает только первый объект
const brothers2 = brothers.find((el) => el.name === "Fro");

// * 4 reduce ()

const brothersAges = brothers.map((el) => el.age);

const sumOfAges = brothersAges.reduce((acc, current) => acc + current, 0); // последовательные операции для элементов

// * Сложение строк в reduce()

const brothersNames1 = brothers.reduce((acc, el) => acc + el.name + ", ", "Братство кольца: ");

// * slice()

const shortBrothers = brothers.slice(1, 4); // отрезает от и до (включительно)

const lastTwoBrother = brothers.slice(brothers.length - 2);

const result = brothers
  .slice(-2)
  .map((el) => el.age)
  .reduce((acc, el) => acc + el, 0);

// ! function - функции

// * function declaration - объявлние функции

function greeting(value) {
  return "Hello, " + value + "!";
}

// console.log(greeting("adad"));

const sum = (num1, num2) => num1 + num2;

const result1 = sum(42, 30);

const multiply = (a, b, c) => {
  const result = a * b * c;
  return `${result} - это результат умножения ${a}, ${b} и ${c}`;
};

console.log(multiply(2, 2, 2));
