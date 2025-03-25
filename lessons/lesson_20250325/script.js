// let h1 = document.getElementById("h1");
// h1.innerText = "heading";
// console.log("h1");

// ! Объявление переменных

// * через ключевое слово let
// такой переменной можно переприсвоить значение и даже значение с другим типом данных

let hello;
hello = "Hello, JS!";
hello = "Привет, JS!";
// hello = 1000;

// console.log("тип в начале", typeof hello);
// hello = 1000;
// console.log("тип в конце", typeof hello);
// console.log(hello);

// * через ключевое слово const
// с const нужно определить значение в момент создания переменной
// нельзя переприсваивать значение
const language = "JavaScript";
// language = JS; - низзя!!

// * 1. string - строка

// при создании строк в JS можно использовать: "", '', ``
let planetNumber = 3;
let planet = "Earth";
// строки можно складывать (конкантенация)
let greeting = "We are from " + planet + "!";

let greeting1 = `Мы живём на планете ${planet} в Солнечной системе. Это ${planetNumber}`;
// console.log(greeting1);

// * 2. number - число
// int и double это один тип данных

let n1 = 42;
let n2 = 3.14;
let n3 = -40;
let lastInteger = Number.MAX_SAFE_INTEGER;
// console.log(typeof n1);
// console.log(typeof n2);
// console.log(typeof n3);
// console.log(lastInteger);

// * 3. boolean = булево значение
let isStudent = true;
let isBackend = false;

let hasLicense = false;
let canDrive = hasLicense ? "You can drive a car" : "Please stop!";
// console.log(canDrive);

// * 4. undefined - неопределённое значение
// не явное указание на отсутствия значения, часто приходит как результат недопустимых операций

let object;
// console.log(object)

// * 5. null - пустое значение
let user = null;

// * 6. bigint - большое число (Long)
// для операций над числами больше .MAX_SAFE_INTEGER
let bigNumber = 1000n;
let bigResult = bigNumber + 100n;
// console.log(bigResult);

// * 7. symbol - символ
// уникально значение используемое в объектах
// не перезаписываемое свойство объекта

let symbolId = Symbol(10);
// console.log(symbolId);

// ! Операции над данными JS

// * приведение типов
// 1. преобразование в строку
let sum = 14 + 2 + "2"; // выходит строка
// 2. преобразование с помощью String()
let sum1 = String(42) + " ответ на главный вопрос";

// * 2. преобразование в число
let sum2 = 2 + Number("16");

// parseInt() - переводит в int до string
let sum3 = 42 + parseInt("30$");

// * 3. преобразование в boolean значение
// значение для false в JS
// false
// 0
// null
// undifined
// emptySpace = ""
// NaN
// 0n (bigint)
// -0

// все остальные значения явдяются - true

// ! Математичесике операторы

// арифметичесике операции

let b1 = 12 + 45; // сложение
let b2 = 12 - 45; // вычитание
let b3 = 12 * 45; // умножение
let b4 = 12 / 45; // деление

let b5 = 12 ** 45; // возведение в степень
let b6 = 15 % 2; // остаток от деление

let b7 = Math.sqrt(25); // квадратный корень

// сдучайное число от 1 до 0
let random = Math.random();

// сдучайное число от 1 до 100
// Math.floor - округляет до целого числа
let random1 = Math.floor(Math.random() * 100) + 1;

// * операторы сравнения
// >, <, ==, ===, !, !==, &&, ||

// == - равенство с приведением типов
let x = 99 == "99"; // true

// === - обычное равенство
let x1 = 99 === "99"; // false

//. !== - обычное равенство
const r1 = 25 !== "25"; // true
const r2 = !true; // false

// операторы && (и), || (или)

const a = 5;
const b = 10;

const res = (a > 0 && b < 20) || a === 0; // true
const res1 = (a > 0 && b < 20) || a === 0;

console.log(res1);
