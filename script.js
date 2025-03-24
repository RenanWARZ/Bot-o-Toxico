function moveButton() {
    const button = document.getElementById('moveButton');

    // Obtendo a largura e altura da tela (body)
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    // Calculando posições aleatórias dentro dos limites do body
    const maxX = screenWidth - button.offsetWidth;
    const maxY = screenHeight - button.offsetHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    // Movendo o botão para a nova posição
    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;
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
setInterval(createHeart, 80);