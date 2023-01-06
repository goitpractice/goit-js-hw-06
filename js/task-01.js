/*
Напиши скрипт, який:

    Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
    Для кожного элемента li.item у списку ul#categories, 
    знайде і виведе в консоль текст заголовку елемента (тегу <h2>) 
    і кількість елементів в категорії (усіх <li>, вкладених в нього).
*/

const categorySelector = "#categories .item";
const categoryHeadingSelector = "h2";
const categoryItemSelector = "li";

const categories = getCategories();
printCategoriesInfo(categories);

function getCategories() {
  return document.querySelectorAll(categorySelector);
}

function getCategoryInfo(categoryEl) {
  const categoryHeading = categoryEl.querySelector(categoryHeadingSelector);
  const categoryItems = categoryEl.querySelectorAll(categoryItemSelector);

  return {
    categoryName: categoryHeading.innerText,
    categoryItemsQty: categoryItems.length,
  };
}

function printCategoriesInfo(categoriesElArr) {
  console.log(`Number of categories: ${categoriesElArr.length}`);

  categoriesElArr.forEach((categoryEl) => {
    const { categoryName, categoryItemsQty } = getCategoryInfo(categoryEl);

    console.log(`
Category: ${categoryName}
Elements: ${categoryItemsQty}    
    `);
  });
}
