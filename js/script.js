// Menu Hamburger
const hamburger = document.getElementById('hamburger');
const sideMenu = document.getElementById('sideMenu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    sideMenu.classList.toggle('open');
});

// Fechar menu ao clicar em link
document.querySelectorAll('.side-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        sideMenu.classList.remove('open');
    });
});

// Animação de fade-in com Intersection Observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
});

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Carrossel na Galeria
const carouselInner = document.querySelector('.carousel-inner');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let currentIndex = 0;
const totalSlides = document.querySelectorAll('.carousel-inner img').length;

function updateCarousel() {
    const translateX = -currentIndex * 100;
    carouselInner.style.transform = `translateX(${translateX}%)`;
}

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalSlides - 1;
    updateCarousel();
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex < totalSlides - 1) ? currentIndex + 1 : 0;
    updateCarousel();
});

// Animações CSS adicionais (bounceIn e fadeInUp) são definidas no CSS, mas podemos adicionar mais interatividade se necessário
// Exemplo: Scroll suave para o CTA button
document.querySelector('.cta-btn').addEventListener('click', () => {
    document.querySelector('#cardapio').scrollIntoView({ behavior: 'smooth' });
});
