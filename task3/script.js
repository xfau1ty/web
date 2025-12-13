const list = document.getElementById('list');
const itemInput = document.getElementById('itemInput');
const addButton = document.getElementById('addButton');

addButton.addEventListener('click', function() {
    const text = itemInput.value.trim();
    
    if (text !== '') {
        const li = document.createElement('li');
        li.className = 'list__item';
        li.textContent = text;
        list.appendChild(li);
        itemInput.value = '';
    }
});
