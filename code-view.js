const start = document.querySelector("#code");

const bttn = document.createElement("button");
bttn.id = "toggleCode";
bttn.innerText = "▶ Показать код ";

const pre = document.createElement("pre");
pre.style.display = "none";
pre.id = "codeBlock";

start.append(bttn);
start.append(pre);

document.getElementById("toggleCode").addEventListener("click", function () {
  const codeBlock = document.getElementById("codeBlock");
  codeBlock.style.backgroundColor = "rgba(0, 0, 0, 0.85)";
  codeBlock.style.padding = "20px";
  codeBlock.style.fontFamily = "'Courier New', Courier, monospace";
  codeBlock.style.color = "rgb(0, 235, 0)";

  if (codeBlock.style.display === "none") {
    fetch("script.js")
      .then((response) => response.text())
      .then((text) => {
        codeBlock.textContent = text;
        codeBlock.style.display = "block";
        this.textContent = "▼ Скрыть код";
      })
      .catch((error) => console.error("Ошибка загрузки script.js:", error));
  } else {
    codeBlock.style.display = "none";
    this.textContent = "▶ Показать код";
  }
});
