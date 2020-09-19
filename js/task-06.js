const validationInputElement = document.querySelector('#validation-input');
const validationLength = Number.parseInt(validationInputElement.dataset.length);

const onInputChange = event => {
  const valueLength = event.currentTarget.value.length;
  const currentClass = validationInputElement.className;

  if (valueLength !== validationLength) {
    validationInputElement.classList.remove('valid');
    return validationInputElement.classList.add('invalid');
  } else {
    validationInputElement.classList.remove('invalid');
    validationInputElement.classList.add('valid');
  }
};

validationInputElement.addEventListener('blur', onInputChange);
