/*
Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), 
підставляє його поточне значення в span#name-output. 
Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".
*/

const defaultOutputValue = "Anonymous";
const inputEl = document.getElementById("name-input");
const outputEl = document.getElementById("name-output");

inputEl.addEventListener("input", (el) => {
  const { value } = el.target;

  outputEl.innerText = value || defaultOutputValue;
});
