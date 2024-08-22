// Seleciona o banner e o texto do banner
const banner = document.getElementById('banner');
const bannerText = document.getElementById('banner-text');

// Adiciona um listener de evento para quando o mouse passa sobre o banner
banner.addEventListener('mouseover', () => {
    banner.style.animation = 'rotate-scale 5s infinite linear'; // Aumenta a velocidade da animação
});

// Adiciona um listener de evento para quando o mouse sai do banner
banner.addEventListener('mouseout', () => {
    banner.style.animation = 'rotate-scale 10s infinite linear'; // Restaura a velocidade da animação
});
