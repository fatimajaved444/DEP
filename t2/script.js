document.addEventListener('DOMContentLoaded', function () {
    const slider = document.getElementById('ratingSlider');
    const ratingValue = document.getElementById('ratingValue');

    slider.addEventListener('input', function () {
        ratingValue.textContent = slider.value;
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const cart = [];
    const addToCartButtons = document.querySelectorAll('.btn-success[data-product]');
    const viewCartButton = document.querySelector('.view-btn');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    const cartModal = new bootstrap.Modal(document.getElementById('cartModal'));

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function (event) {
            event.preventDefault();
            const product = this.getAttribute('data-product');
            cart.push(product);
        });
    });

    viewCartButton.addEventListener('click', function () {
        let cartContent = '';
        if (cart.length > 0) {
            cartContent = '<ul>';
            cart.forEach(item => {
                cartContent += `<li>${item}</li>`;
            });
            cartContent += '</ul>';
        } else {
            cartContent = 'Your cart is empty.';
        }
        modalTitle.textContent = 'Cart Contents';
        modalBody.innerHTML = cartContent;
        cartModal.show();
    });
});
