function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.add('open');

    modal.addEventListener('click', (e) => {
        if (e.target.id == modalId || e.target.classList.contains('close')) {
            closeModal(modalId);
        }
    });
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.remove('open');
}

document.querySelectorAll('.close').forEach(button => {
    button.addEventListener('click', (e) => {
        const modalId = e.target.closest('.modal').id;
        closeModal(modalId);
    });
});
