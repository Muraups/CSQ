document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.show-image-button');
    const modal = document.getElementById('image-modal');
    const modalImage = document.getElementById('modal-image');
    const closeButton = document.querySelector('.close');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            modal.style.display = 'block';
            modalImage.src = this.dataset.image;
            modal.classList.add('show'); // Adiciona a classe 'show'
        });
    });

    closeButton.addEventListener('click', function() {
        modal.style.display = 'none';
        modal.classList.remove('show'); // Remove a classe 'show'
    });

    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
            modal.classList.remove('show'); // Remove a classe 'show'
        }
    });
});