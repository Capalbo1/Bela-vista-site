// Evento de clique para criar folhas caindo
document.addEventListener('click', function(event) {
    // Cria a folha
    const leaf = document.createElement('div');
    leaf.classList.add('leaf');

    // Define a posição inicial da folha onde o clique ocorreu
    leaf.style.left = `${event.clientX}px`;
    leaf.style.top = `${event.clientY}px`;

    // Adiciona a folha ao corpo
    document.body.appendChild(leaf);

    // Remove a folha após a animação (7 segundos)
    setTimeout(() => {
        leaf.remove();
    }, 7000);
});

