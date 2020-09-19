const inputElementValue = document.querySelector('#box-input');
const createBtn = document.querySelector('[data-action="render"]');
const destroyBtn = document.querySelector('[data-action="destroy"]');
const boxElement = document.querySelector('#boxes');

const randColor = num => {
  return Math.floor(Math.random() * num);
};

const createBoxes = amount => {
  boxElement.innerHTML = '';
  let boxes = '';

  if (amount > 0 && amount <= 100) {
    for (let i = 1; i <= amount; i += 1) {
      const rgb = `rgb(${randColor(256)}, ${randColor(256)}, ${randColor(
        256,
      )})`;
      const size = 30 + i * 10 + 'px';

      boxes += `<div style="width: ${size}; height: ${size}; background-color: ${rgb}"></div>`;
    }

    return boxElement.insertAdjacentHTML('beforeend', boxes);
  }
};

const destroyBoxes = () => (boxElement.innerHTML = '');

createBtn.addEventListener('click', () => createBoxes(inputElementValue.value));
destroyBtn.addEventListener('click', destroyBoxes);
