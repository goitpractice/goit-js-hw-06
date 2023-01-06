/**
 * Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input)
 * і змінює інлайн-стиль span#text, оновлюючи властивість font-size.
 * В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.
 */

const sizeInputEl = document.getElementById("font-size-control");
const textEl = document.getElementById("text");

sizeInputEl.value = parseInt(getComputedStyle(textEl).fontSize);

sizeInputEl.addEventListener("input", (ev) => {
  const { value } = ev.target;

  textEl.style.fontSize = `${value}px`;
});
