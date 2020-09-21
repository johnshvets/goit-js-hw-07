const counterValue = document.querySelector('#value');

const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

let counter = 0;

const increment = () => {
  counter += 1;
  counterValue.textContent = counter;
};
const decrement = () => {
  counter -= 1;
  counterValue.textContent = counter;
};

decrementBtn.addEventListener('click', decrement);
incrementBtn.addEventListener('click', increment);
