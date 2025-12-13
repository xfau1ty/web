const form = document.getElementById('form');
const nameInput = document.getElementById('nameInput');
const emailInput = document.getElementById('emailInput');
const message = document.getElementById('message');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    
    message.className = 'message';
    
    if (name === '' || email === '') {
        message.textContent = 'Пожалуйста, заполните все поля!';
        message.classList.add('message--error');
    } else {
        message.textContent = 'Форма успешно отправлена (в консоль)!';
        message.classList.add('message--success');
        
        const formData = new FormData(form);
        console.log('Данные формы:');
        for (const [key, value] of formData.entries()) {
            console.log(`${key}: ${value}`);
        }
    }
});
