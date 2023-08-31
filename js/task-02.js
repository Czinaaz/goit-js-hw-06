const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsList = document.getElementById('ingredients');

ingredients.forEach(ingredient => {

  const liElement = document.createElement('li');

  liElement.textContent = ingredient;

  liElement.className = 'item';

  ingredientsList.appendChild(liElement);
});

