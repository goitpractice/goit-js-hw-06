/*
    Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
    Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
    Оновлюй інтерфейс новим значенням змінної counterValue.
*/

let counterValue = 0;
const valueEl = document.getElementById("value");
const decrementBtnEl = document.querySelector('[data-action="decrement"]');
const incrementBtnEl = document.querySelector('[data-action="increment"]');

decrementBtnEl.addEventListener("click", () => {
  updateValue(counterValue - 1);
});

incrementBtnEl.addEventListener("click", () => {
  updateValue(counterValue + 1);
});

function updateValue(newValue) {
  counterValue = newValue;
  valueEl.innerText = counterValue;
}
