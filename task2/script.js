const box = document.getElementById('box');
const toggleButton = document.getElementById('toggleButton');

toggleButton.addEventListener('click', function() {
    box.classList.toggle('box--highlight');
});
