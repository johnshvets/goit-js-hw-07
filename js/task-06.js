const validationInputElement = document.querySelector('#validation-input');
const validationLength = Number.parseInt(validationInputElement.dataset.length);

const onInputChange = event => {
  const valueLength = event.currentTarget.value.length;

  if (valueLength !== validationLength) {
    validationInputElement.classList.remove('valid');
    validationInputElement.classList.add('invalid');
  } else {
    validationInputElement.classList.replace(
      validationInputElement.className,
      'valid',
    );
  }
};

validationInputElement.addEventListener('blur', onInputChange);
