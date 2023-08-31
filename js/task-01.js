
const categoriesList = document.getElementById('categories');

const categoryItems = categoriesList.querySelectorAll('.item');

const numberOfCategories = categoryItems.length;
console.log(`Number of categories: ${numberOfCategories}\n`);

categoryItems.forEach(item => {
    const categoryName = item.querySelector('h2').textContent;
    const categoryElements = item.querySelectorAll('li');
    const numElements = categoryItems.length;
    console.log(`Category: ${categoryName}`);
    console.log(`Elements: ${numElements}\n`);
});

