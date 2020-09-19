const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsList = document.querySelector('#ingredients');

const ingredientsElements = ingredients.map(ingredient => {
  const liElement = document.createElement('li');
  liElement.textContent = ingredient;
  return liElement;
});

ingredientsList.append(...ingredientsElements);
