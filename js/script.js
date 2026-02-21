// BURGER MENU
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');

burger.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// SCROLL TO CONCERTS
const scrollBtn = document.getElementById('scrollToConcerts');
const concertsSection = document.getElementById('concerts');

scrollBtn.addEventListener('click', () => {
    concertsSection.scrollIntoView({ behavior: 'smooth' });
});

// BUY BUTTONS
const buyButtons = document.querySelectorAll('.buy-btn');

buyButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert('Квиток додано до бронювання!');
    });
});

// FORM VALIDATION
const form = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = this.name.value.trim();
    const email = this.email.value.trim();
    const message = this.message.value.trim();

    if (name.length < 2) {
        formMessage.textContent = 'Імʼя занадто коротке';
        formMessage.style.color = 'red';
        return;
    }

    if (!email.includes('@')) {
        formMessage.textContent = 'Некоректний email';
        formMessage.style.color = 'red';
        return;
    }

    formMessage.textContent = 'Повідомлення успішно відправлено!';
    formMessage.style.color = 'lightgreen';

    form.reset();
});
// GALLERY MODAL
const openGalleryBtn = document.getElementById('openGallery');
const modal = document.getElementById('galleryModal');
const modalImage = document.getElementById('modalImage');
const modalClose = document.getElementById('modalClose');
const modalOverlay = document.getElementById('modalOverlay');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

const images = [
    './img/gallery1.jpg',
    './img/gallery2.jpg',
    './img/gallery3.jpg',
    './img/gallery4.jpg'
];

let currentIndex = 0;


openGalleryBtn.addEventListener('click', () => {
    modal.classList.add('active');
    modalImage.src = images[currentIndex];
});


function showImage(index) {
    if (index < 0) {
        currentIndex = images.length - 1;
    } else if (index >= images.length) {
        currentIndex = 0;
    } else {
        currentIndex = index;
    }

    modalImage.src = images[currentIndex];
}

nextBtn.addEventListener('click', () => {
    showImage(currentIndex + 1);
});

prevBtn.addEventListener('click', () => {
    showImage(currentIndex - 1);
});


modalClose.addEventListener('click', () => {
    modal.classList.remove('active');
});

modalOverlay.addEventListener('click', () => {
    modal.classList.remove('active');
});