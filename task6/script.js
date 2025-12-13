const list = document.getElementById('list');
const removeButton = document.getElementById('removeButton');

removeButton.addEventListener('click', function() {
    const lastItem = list.lastElementChild;
    
    if (lastItem) {
        list.removeChild(lastItem);
    }
});
