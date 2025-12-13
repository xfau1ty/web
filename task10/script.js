const list = document.getElementById('list');
const addButton = document.getElementById('addButton');

let itemCount = list.children.length;

list.addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
        event.target.textContent = 'Нажато!';
        event.target.classList.add('list__item--clicked');
    }
});

addButton.addEventListener('click', function() {
    itemCount += 1;
    const li = document.createElement('li');
    li.className = 'list__item';
    li.textContent = 'Пункт ' + itemCount;
    list.appendChild(li);
});
