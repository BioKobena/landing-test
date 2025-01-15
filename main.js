const slides = document.querySelectorAll(".carousel-slide");
const indicators = document.querySelectorAll(".carousel-indicators .indicator");
let currentIndex = 0;

// Fonction pour afficher une diapositive spécifique
function goToSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? "block" : "none"; // Afficher ou cacher les slides
    });
    indicators.forEach((indicator, i) => {
        indicator.classList.toggle("active", i === index); // Mettre à jour l'indicateur actif
    });
    currentIndex = index;
}

// Initialiser le carrousel
goToSlide(currentIndex);

// Ajouter les événements aux indicateurs
indicators.forEach((indicator, index) => {
    indicator.addEventListener("click", () => {
        goToSlide(index);
    });
});

document.querySelector(".carousel-btn.prev").addEventListener("click", () => {
    const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
    goToSlide(prevIndex);
});

document.querySelector(".carousel-btn.next").addEventListener("click", () => {
    const nextIndex = (currentIndex + 1) % slides.length;
    goToSlide(nextIndex);
});

function toggleMenu() {
    const mobileMenu = document.querySelector('.site-mobile-menu');
    mobileMenu.classList.toggle('open');
  }
  