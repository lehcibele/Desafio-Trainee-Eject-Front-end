const control = document.querySelectorAll('.control');
let currentItem = 0;
const itens = document.querySelectorAll('.item');
const maxItens = itens.length;

control.forEach(control => {
    control.addEventListener('click', () => {
        const esquerda = control.classList.contains('seta-esquerda');
        
        if(esquerda) {
            currentItem -= 1;
        } else {
            currentItem += 1;
        }

        if(currentItem >= maxItens) {
            currentItem = 0;
        }

        if(currentItem < 0) {
            currentItem = maxItens - 1;
        }
        
        itens.forEach(item => item.classList.remove('proximo-item'));

        itens[currentItem].scrollIntoView({
            inline: "center",
            behavior: "smooth",
        });
    })
})