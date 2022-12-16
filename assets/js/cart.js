const cartIcon = document.querySelector('.cart-icon')
let itemCount = localStorage.getItem('itemCountInCard') ?? 0;

cartIcon.setAttribute('data-item-count', itemCount);

if (itemCount > 0) {
    cartIcon.style = "--notif-opacity: 1;";
} else {
    cartIcon.style = "--notif-opacity: 0;";
}

document.querySelector('.add-to-cart').addEventListener('click', () => {
    itemCount++;
    localStorage.setItem('itemCountInCard', itemCount);
    cartIcon.setAttribute('data-item-count', itemCount);
    cartIcon.style = "--notif-opacity: 1;";
});

cartIcon.addEventListener('click', () => {
    itemCount = 0;
    localStorage.setItem('itemCountInCard', itemCount);
    cartIcon.setAttribute('data-item-count', itemCount);
    cartIcon.style = "--notif-opacity: 0;";
});