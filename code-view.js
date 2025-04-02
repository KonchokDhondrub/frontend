document.getElementById("toggleCode").addEventListener("click", function () {
  const codeBlock = document.getElementById("codeBlock");
  const arrow = document.getElementById("arrow");

  if (codeBlock.style.display === "none") {
    fetch("script.js")
      .then((response) => response.text())
      .then((text) => {
        codeBlock.textContent = text;
        codeBlock.style.display = "block";
        arrow.textContent = "▼";
        this.textContent = " Скрыть код";
        this.prepend(arrow);
      })
      .catch((error) => console.error("Ошибка загрузки script.js:", error));
  } else {
    codeBlock.style.display = "none";
    arrow.textContent = "▶";
    this.textContent = " Показать код";
    this.prepend(arrow);
  }
});
