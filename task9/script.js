const text = document.getElementById('text');
const colorSelect = document.getElementById('colorSelect');

colorSelect.addEventListener('change', function() {
    const selectedColor = colorSelect.value;
    
    if (selectedColor) {
        text.style.color = selectedColor;
    }
});
