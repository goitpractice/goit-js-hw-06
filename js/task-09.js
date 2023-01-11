/*
Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку
на button.change-color і виводить значення кольору в span.color.
*/

const changeColorButtonEl = document.querySelector("button");
const currentColorEl = document.querySelector(".color");

changeColorButtonEl.addEventListener("click", () => {
  const color = getRandomHexColor();

  currentColorEl.textContent = color;
  document.body.setAttribute("style", `background-color: ${color}`);
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
