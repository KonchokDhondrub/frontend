// ! асинхронность в JS

// setTimeout(() => {
//   console.log("Прошло 9 секунд");
// }, 9000);

const interval = setInterval(() => {
  // console.log("Ping!");

  setTimeout(() => {
    // console.log("Pong!");
  }, 2000);
}, 3000);

setTimeout(() => {
  clearInterval(interval);
}, 9000);

// ! async requests & promises

// API - Application Programming Interface
// набор правил позволяющий одним программам понимать другие программы, общаться друг с другом и обмениваться данными

// часто когда мы работаем с API мы хотим сделать запрос за данными чтобы обработать их в своем коде и отобразить на странице

// * если я хочу получить удаленные данные по запросу - то используем ключевое слово fetch() (в переводе 'принеси')

// в ответ на запрос мне приходят данные в виде объекта Promise

// Promise - это особый вид данных в JS который нуждается в асинхронной обработке. У него есть три состояния:

// 1. <Pending> - ожидание данных
// 2. <Fulfilled> - данные успешно пришли
// 3. <Rejected> - данные пришли с ошибкой

// ? запрос не получится обработать синхронно

// const data = fetch('https://dog.ceo/api/breeds/image/random')
// console.log(data)

// ? чтобы обработать асинхронный запрос возвращающий объект Promise мы используем метод then()

// ! короткий fetch запрос только про успех

// fetch("https://dog.ceo/api/breed")
//   .then((res) => res.json())
//   .then((data) => {
//     const img = document.createElement("img");
//     img.src = data.message;
//     document.body.append(img);
//   })

// ! длинный fetch запрос обрабатывающий ошибку

// запрос за данными возвращающий promise который мы обрабатываем через then()
fetch("https://dog.ceo/api/breeds/image/random")
  .then((res) => {
    // если поле ok - в положении false мы переходим к блоку catch отрабатывающего ошибку
    if (!res.ok) {
      throw new Error(`Ошибка: ${res.status}`);
    }
    return res.json();
  })
  // если все хорошо обрабатываем данные
  .then((data) => {
    const img = document.createElement("img");
    img.src = data.message;
    document.body.append(img);
  })
  // если ошибка показываем ее в консоли
  .catch((error) => {
    console.log(error);
  });
