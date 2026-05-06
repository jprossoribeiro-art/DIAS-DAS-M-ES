// Pegando os elementos da página
const surpriseBtn = document.getElementById('surpriseBtn');
const messageModal = document.getElementById('messageModal');
const closeBtn = document.querySelector('.close-btn');

// Função para abrir o modal
surpriseBtn.addEventListener('click', () => {
    // Adiciona a classe 'show' que faz o modal aparecer com animação
    messageModal.classList.add('show');
    
    // Pequeno efeito extra no botão
    surpriseBtn.innerHTML = "Espero que goste! ❤️";
});

// Função para fechar o modal ao clicar no 'X'
closeBtn.addEventListener('click', () => {
    messageModal.classList.remove('show');
    
    // Volta o texto original depois de meio segundo (tempo da animação acabar)
    setTimeout(() => {
        surpriseBtn.innerHTML = "Clique aqui para uma surpresa 🎁";
    }, 500);
});

// Fecha o modal se clicar fora da caixinha de mensagem (no fundo escuro)
window.addEventListener('click', (event) => {
    if (event.target === messageModal) {
        messageModal.classList.remove('show');
        setTimeout(() => {
            surpriseBtn.innerHTML = "Clique aqui para uma surpresa 🎁";
        }, 500);
    }
});
