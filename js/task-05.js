const inputElement = document.querySelector('#name-input');

const outputElement = document.querySelector('#name-output');

inputElement.addEventListener('input', event =>
  event.currentTarget.value === ''
    ? (outputElement.textContent = 'незнакомец')
    : (outputElement.textContent = event.currentTarget.value),
);
