
const mobileMenu = () => {
    const hamburger = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a'); // Seleciona todos os links

    // Função para alternar o menu
    const toggleMenu = () => {
        // Anima o menu para dentro/fora da tela
        navMenu.classList.toggle('nav-active');

        // Anima o ícone do hambúrguer para "X" e vice-versa
        hamburger.classList.toggle('toggle');
    }

    // Adiciona o evento de clique ao ícone do hambúrguer
    hamburger.addEventListener('click', toggleMenu);

    // Adiciona evento de clique a cada link do menu
    // para fechar o menu ao selecionar uma opção
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('nav-active')) {
                toggleMenu();
            }
        });
    });
}

// Executa a função
mobileMenu();