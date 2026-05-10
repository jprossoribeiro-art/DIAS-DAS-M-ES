const { animate, stagger, inView } = Motion;

// Pegando os elementos da página
const surpriseBtn = document.getElementById('surpriseBtn');
const messageModal = document.getElementById('messageModal');
const closeBtn = document.querySelector('.close-btn');

// Animações de entrada com Framer Motion (Motion)
// Hero Section
animate(".hero h1", { opacity: [0, 1], y: [-50, 0] }, { duration: 1, ease: "ease-out" });
animate(".hero p", { opacity: [0, 1], y: [30, 0] }, { duration: 1, delay: 0.3, ease: "ease-out" });

// Galeria - animar quando entrar na tela
inView(".gallery-grid", () => {
    animate(".photo-card", { opacity: [0, 1], y: [50, 0] }, { duration: 0.8, delay: stagger(0.2), ease: "ease-out" });
});

// Botão Surpresa - animar quando entrar na tela
inView(".surprise-section", () => {
    animate("#surpriseBtn", { opacity: [0, 1], scale: [0.8, 1] }, { duration: 0.6, type: "spring", bounce: 0.5 });
});

// Função para abrir o modal
surpriseBtn.addEventListener('click', () => {
    // Adiciona a classe 'show' que faz o modal aparecer
    messageModal.classList.add('show');
    
    // Anima o conteúdo do modal ao abrir usando Motion
    animate(".modal-content", { scale: [0.8, 1], opacity: [0, 1], y: [-50, 0] }, { duration: 0.5, type: "spring", bounce: 0.4 });

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
