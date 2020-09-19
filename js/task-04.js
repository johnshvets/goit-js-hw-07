const counterValue = document.querySelector('#value');

const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

const increment = () =>
  (counterValue.textContent = Number.parseInt(counterValue.textContent) + 1);
const decrement = () => (counterValue.textContent -= 1);

decrementBtn.addEventListener('click', decrement);
incrementBtn.addEventListener('click', increment);
