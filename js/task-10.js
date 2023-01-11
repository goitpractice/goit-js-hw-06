/*
Створи функцію createBoxes(amount), яка приймає один параметр - число. 
Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

    Розміри найпершого <div> - 30px на 30px.
    Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
    Всі елементи повинні мати випадковий колір фону у форматі HEX. 
    Використовуй готову функцію getRandomHexColor для отримання кольору.
    Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.
*/

const controlsEl = document.querySelector("#controls");
const boxesEl = document.querySelector("#boxes");
const amountInputEl = controlsEl.querySelector("input");
const defaultBoxSizePx = 30;

let boxSizePx = defaultBoxSizePx;

controlsEl.addEventListener("click", (ev) => {
  if (ev.target.hasAttribute("data-create")) {
    createBoxes(amountInputEl.value);
  }
  if (ev.target.hasAttribute("data-destroy")) {
    destroyBoxes();
  }
});

function createBoxes(amount) {
  const boxEls = [];

  for (let i = 0; i < amount; i++) {
    boxEls.push(createBox());
    boxSizePx += 10;
  }

  boxesEl.append(...boxEls);
}

function destroyBoxes() {
  boxesEl.innerHTML = "";
  boxSizePx = defaultBoxSizePx;
}

function createBox() {
  const boxEl = document.createElement("div");

  boxEl.style.width = boxSizePx + "px";
  boxEl.style.height = boxSizePx + "px";
  boxEl.style.backgroundColor = getRandomHexColor();

  return boxEl;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
