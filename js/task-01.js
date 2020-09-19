console.log('--Task #1--');

const listItems = Array.from(document.querySelector('#categories').children);

console.log(`В списке ${listItems.length} категории.`);

const showItemsContent = list =>
  list.forEach(item =>
    console.log(
      `Категория: ${item.querySelector('h2').textContent}
Количество элементов: ${item.querySelectorAll('li').length}`,
    ),
  );

showItemsContent(listItems);
