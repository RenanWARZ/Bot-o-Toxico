function moveButton() {
    const button = document.getElementById('moveButton');
    const container = document.querySelector('.menu'); // Mantém dentro do menu

    const containerRect = container.getBoundingClientRect();
    
    const maxX = containerRect.width - button.offsetWidth;
    const maxY = containerRect.height - button.offsetHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    button.style.transform = `translate(${randomX}px, ${randomY}px)`;
}


function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤'; // Símbolo do coração

    // Posiciona o coração em uma posição aleatória
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 2 + 3 + 's'; // Tempo aleatório para cada coração

    document.body.appendChild(heart);

    // Remove o coração após a animação
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// Cria corações a cada 100ms
setInterval(createHeart, 50);