fetch("src/lessonsList.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("lessons-list-container").innerHTML = data;
  })
  .catch((error) => {
    console.error("Ошибка при загрузке файла:", error);
  });
