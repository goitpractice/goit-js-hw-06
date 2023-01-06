/*
Напиши скрипт, який для кожного елемента масиву ingredients:

    Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
    Додасть назву інгредієнта як його текстовий вміст.
    Додасть елементу клас item.
    Після чого, вставить усі <li> за одну операцію у список ul#ingredients.
*/

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingredientsWrapperEl = document.querySelector("ul#ingredients");

const ingredientEls = ingredients.map((ingredient) => {
  const listItemEl = document.createElement("li");

  listItemEl.textContent = ingredient;
  listItemEl.classList.add("item");

  return listItemEl;
});

ingredientsWrapperEl.append(...ingredientEls);
