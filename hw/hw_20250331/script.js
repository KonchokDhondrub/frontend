const form = document.getElementById("movie-form");
const clearBtn = document.getElementById("btn-clear");
clearBtn.addEventListener("click", () => {
  movieList.length = 0;
  clearList();
});

const parent = document.getElementById("list-movies");
const movieList = [
  {
    name: "Alien: Romulus",
    author: "Fede Álvarez",
    year: "2024",
    img: "https://creativereview.imgix.net/content/uploads/2024/12/AlienRomulus-scaled.jpg?auto=compress,format&q=60&w=729&h=1080",
  },
  {
    name: "1+1",
    author: "Оливье Накаш",
    year: "2011",
    img: "https://avatars.mds.yandex.net/get-kinopoisk-image/10900341/caf9f155-1a19-42f1-a0f3-9c8773e9083e/600x900",
  },
  {
    name: "Побег из Шоушенка",
    author: "Френк Дарабонт",
    year: "1994",
    img: "https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/0b76b2a2-d1c7-4f04-a284-80ff7bb709a4/600x900",
  },
  {
    name: "Джентельмены",
    author: "Гай Ричи",
    year: "2019",
    img: "https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/637271d5-61b4-4e46-ac83-6d07494c7645/600x900",
  },
];

const remove = (index) => {
  clearList();
  movieList.splice(index, 1);
  createList(movieList);
};

function clearList() {
  while (parent.hasChildNodes()) {
    parent.firstChild.remove();
  }
}

function createList(list) {
  list.forEach((el, index) => {
    const container = document.createElement("div");
    container.className = "flexgrid--3";
    container.innerHTML = `<article class="modul-teaser">
      <div class="image">
        <a href="#"><img src="${el.img}" alt="${el.name}" /></a>
        <div class="pointer">
          <i onclick="remove(${index})" class="fa-solid fa-trash"></i>
        </div>
      </div>
      <h3 class="title"><a href="#">${el.name}</a></h3>
      <div class="inner">
        <p class="year">${el.year}</p>
        <p class="text">${el.author}</p>
      </div>
    </article>`;
    parent.append(container);
  });
}

function showCustomAlert(message) {
  const alertBox = document.createElement("div");
  alertBox.innerText = message;
  alertBox.style.position = "fixed";
  alertBox.style.top = "20%";
  alertBox.style.left = "50%";
  alertBox.style.transform = "translateX(-50%)";
  alertBox.style.background = "rgb(221, 7, 7)";
  alertBox.style.color = "#fff";
  alertBox.style.fontWeight = "bold";
  alertBox.style.padding = "20px 40px";
  alertBox.style.borderRadius = "5px";
  alertBox.style.zIndex = "1000";

  document.body.appendChild(alertBox);

  setTimeout(() => {
    alertBox.remove();
  }, 2000);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const newMovie = {
    name: event.target.name.value,
    author: event.target.author.value,
    year: event.target.year.value,
    img: event.target.img.value,
  };

  const isDuplicate = movieList.some((movie) => movie.name.toLowerCase() === newMovie.name.toLowerCase() && movie.author.toLowerCase() === newMovie.author.toLowerCase() && movie.year === newMovie.year);

  if (isDuplicate) {
    showCustomAlert("Этот фильм уже есть в вашем списке!");
    return;
  }

  movieList.push(newMovie);
  clearList();
  createList(movieList);
  event.target.reset();
});

createList(movieList);
