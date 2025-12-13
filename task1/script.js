const heading = document.getElementById('heading');
const changeButton = document.getElementById('changeButton');

changeButton.addEventListener('click', function() {
    heading.textContent = 'Заголовок изменен!';
});
