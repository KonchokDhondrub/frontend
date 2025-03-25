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

