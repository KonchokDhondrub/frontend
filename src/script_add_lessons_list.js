function loadFile(url, containerId) {
  fetch(url)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById(containerId).innerHTML = data;
    })
    .catch((error) => {
      console.error("Ошибка при загрузке файла:", url, error);
    });
}

document.addEventListener("DOMContentLoaded", () => {
  loadFile("src/lessonsList.html", "lessons-list-container");
  loadFile("src/homeworkList.html", "homework-list-container");
});
