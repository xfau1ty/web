let count = 0;

const counterValue = document.getElementById('counterValue');
const incrementButton = document.getElementById('incrementButton');

incrementButton.addEventListener('click', function() {
    count += 1;
    counterValue.textContent = count;
});
