document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.columns_servicos');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            cards.forEach(card => card.classList.remove('column_selected'));
            // Adiciona a classe column_selected ao card clicado
            card.classList.add('column_selected');
        });
    });
});