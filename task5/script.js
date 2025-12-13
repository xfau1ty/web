const images = [
    'https://placehold.co/200x200?text=Image+1',
    'https://placehold.co/200x200?text=Image+2',
    'https://placehold.co/200x200?text=Image+3',
    'https://placehold.co/200x200?text=Image+4',
    'https://placehold.co/200x200?text=Image+5'
];

let currentImageIndex = 0;

const image = document.getElementById('image');
const changeImageButton = document.getElementById('changeImageButton');

changeImageButton.addEventListener('click', function() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    image.src = images[currentImageIndex];
});
