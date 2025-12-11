const btnMenu = document.getElementById('btn-menu');
const menu = document.getElementById('menu');
const btnCardapio = document.getElementById('btn-cardapio');
const btnGaleria = document.getElementById('btn-galeria');
btnMenu.addEventListener('click', () => {
    menu.classList.toggle('nav-menu-toggle');
});
btnCardapio.addEventListener('click', () => {
    window.location.href = './cardapio.html';
});
btnGaleria.addEventListener('click', () => {
    window.location.href = './galeria.html'
});

const changingWord = document.getElementById('changing-word');
const words = ["Café!", "Arte!"];
let wordIndex = 0;
let charIndex = words[0].length;
let isDeleting = true;

function typeWriterEffect() {
    const currentWord = words[wordIndex];
    let speed;
    
    if (isDeleting) {
        changingWord.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
        speed = 100;
        
        if (charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length; 
            speed = 100;
        }
        
    } else {
        const nextWord = words[wordIndex];
        changingWord.textContent = nextWord.substring(0, charIndex + 1);
        charIndex++;
        speed = 100;
        
        if (charIndex === nextWord.length) {
            speed = 5000;
            isDeleting = true;
            charIndex = nextWord.length; 
        }
    }

    setTimeout(typeWriterEffect, speed);
}
document.addEventListener('DOMContentLoaded', typeWriterEffect);