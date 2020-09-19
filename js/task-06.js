const validationInputElement = document.querySelector('#validation-input');
const validationLength = Number.parseInt(validationInputElement.dataset.length);

const onInputChange = event => {
  const valueLength = event.currentTarget.value.length;
  const currentClass = validationInputElement.className;

  return valueLength !== validationLength
    ? validationInputElement.classList.add('invalid')
    : validationInputElement.classList.replace(currentClass, 'valid');
};

validationInputElement.addEventListener('blur', onInputChange);
