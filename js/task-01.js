const categoriesList = document.querySelector('#categories');
const categoryItems = categoriesList.querySelectorAll('li.item');


const numbers = categoryItems.length;
console.log('Number of categories:', numbers);


categoryItems.forEach(categoryItem => {

  const categoryTitle = categoryItem.querySelector('h2').textContent;
  const categoryElements = categoryItem.querySelectorAll('li');
  const numberOfElements = categoryElements.length;
  
 
  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${numberOfElements}`);
});