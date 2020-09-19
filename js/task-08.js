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

  if (amount > 0) {
    for (let i = 1; i <= amount; i += 1) {
      const rgb = `rgb(${randColor(256)}, ${randColor(256)}, ${randColor(
        256,
      )})`;

      boxes += `<div style="width: ${30 + i * 10 + 'px'}; height: ${
        30 + i * 10 + 'px'
      }; background-color: ${rgb}"></div>`;
    }

    return boxElement.insertAdjacentHTML('beforeend', boxes);
  }
};

const destroyBoxes = () => (boxElement.innerHTML = '');

createBtn.addEventListener('click', () => createBoxes(inputElementValue.value));
destroyBtn.addEventListener('click', destroyBoxes);
