// Elementos del DOM
const question = document.getElementById('question');
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const envelope = document.getElementById('envelope');
const surpriseBtn = document.getElementById('surpriseBtn');
const modal = document.getElementById('modal');
const acceptBtn = document.getElementById('acceptBtn');
const rejectBtn = document.getElementById('rejectBtn');

// Mover el botón "No" al azar
noBtn.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.position = 'absolute';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

// Mostrar el sobre y la carta al hacer clic en "Sí"
yesBtn.addEventListener('click', () => {
    question.style.display = 'none'; // Ocultar la pregunta
    envelope.style.display = 'block'; // Mostrar el sobre
});

// Mostrar el modal al hacer clic en "¡Sorpréndeme!"
surpriseBtn.addEventListener('click', () => {
    modal.style.display = 'flex'; // Mostrar el modal
});

// Ocultar el modal al hacer clic en "Aceptar"
acceptBtn.addEventListener('click', () => {
    modal.style.display = 'none'; // Ocultar el modal
    alert('¡Genial! Estoy emocionado de pasar San Valentín contigo. ❤️');
    createHearts();
});

// Hacer que el botón "Rechazar" se haga más pequeño hasta desaparecer
rejectBtn.addEventListener('click', () => {
    // Reducir el tamaño del botón "Rechazar"
    const currentWidth = rejectBtn.offsetWidth;
    const currentHeight = rejectBtn.offsetHeight;
    const currentFontSize = parseFloat(window.getComputedStyle(rejectBtn).fontSize);
    const newWidth = currentWidth * 0.8; // Reducir al 80% del tamaño actual
    const newHeight = currentHeight * 0.8; // Reducir al 80% del tamaño actual
    const newFontSize = currentFontSize * 0.8; // Reducir el tamaño de la fuente al 80%

    rejectBtn.style.width = `${newWidth}px`;
    rejectBtn.style.height = `${newHeight}px`;
    rejectBtn.style.fontSize = `${newFontSize}px`;

    // Si el botón es muy pequeño, ocultarlo
    if (newWidth < 50 || newHeight < 20) {
        rejectBtn.style.display = 'none'; // Ocultar el botón
        alert('¡No puedes rechazarme! Tienes que aceptar. ❤️');
    }
});

// Animación de corazones (opcional)
const heartsContainer = document.getElementById('heartsContainer');

function createHearts() {
    for (let i = 0; i < 50; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerHTML = '❤️';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 3 + 2 + 's';
        heartsContainer.appendChild(heart);
    }
}

// Llamar a la función de corazones si lo deseas


