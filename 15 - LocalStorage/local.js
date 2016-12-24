const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const clearAllButton = document.querySelector('.clear-all')
let items = JSON.parse(localStorage.getItem('items')) || [];

function addItem (e) {
  e.preventDefault();
  const text = (this.querySelector('[name=item]')).value;
  const item = {
    text,
    done: false
  }
  items.push(item);
  populateList(items, itemsList);
  localStorage.setItem('items', JSON.stringify(items));
  this.reset();
}

function clearAll (e) {
  localStorage.clear();
  items = [];
  populateList(items, itemsList);
}

function populateList (items = [], itemsList) {
  itemsList.innerHTML = items.map((item, i) => {
    return `
      <li>
        <input type="checkbox" data-index=${i} id="item${i}" ${item.done ? 'checked' : ''}/>
        <label for="item${i}">${item.text}</label>
      </li>
    `;
  }).join('');
}

//event delegation
function toggleDone (e) {
  if (!e.target.matches('input')) return; //skip this unless it's an input
  const el = e.target;
  const index = el.dataset.index;
  items[index].done = !items[index].done;
  localStorage.setItem('items', JSON.stringify(items));
  populateList(items, itemsList);
}

addItems.addEventListener('submit', addItem);
clearAllButton.addEventListener('click', clearAll);
itemsList.addEventListener('click', toggleDone);
populateList(items, itemsList);



