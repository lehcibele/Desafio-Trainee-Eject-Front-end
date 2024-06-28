document.querySelectorAll('a.navbar-link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); /*Previne o comportamento padrão */

        const offset = document.querySelector('nav').offsetHeight; /*Obtem a altura do menu fixo */

        const targetId = this.getAttribute('href');

        const targetPosition = document.querySelector(targetId).offsetTop - offset;

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    });
});
