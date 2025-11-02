import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getCart, saveCart, updateNavCounts } from './js/storage.js';
import { getProductById } from './js/products-api.js';
import { renderProducts, showLoader, showNotFound } from './js/render-function.js';
import { onProductClick } from './js/handlers';

const refs = {
    productsList: document.querySelector('.products'),
    itemsCount: document.querySelector('[data-count]'),
    totalPrice: document.querySelector('[data-price]'),
    buyBtn: document.querySelector('.cart-summary__btn'),
    notFound: document.querySelector('.not-found'),
};

// Инициализация 
async function init() {
    showLoader(true);
    const ids = getCart('cart') || [];

    if (ids.length === 0) {
        refs.productsList.innerHTML = '';
        showNotFound(true);
        updateSummary(0, 0);
        showLoader(false);
        updateNavCounts();
        return;
    }

    try {
        const products = await Promise.all(ids.map(id => getProductById(id)));
        renderProducts(products);
        showNotFound(false);

        const totalItems = products.length;
        const totalPrice = products.reduce((sum, p) => sum + p.price, 0).toFixed(2);
        updateSummary(totalItems, totalPrice);

    } catch (error) {
        console.error('Cart load error:', error);
        iziToast.error({
            title: 'Error',
            message: 'Failed to load products',
            position: 'topRight',
        });
        showNotFound(true);
        
    } finally {
        showLoader(false); 
    }
}

// Обновление итогов
function updateSummary(items, price) {
    refs.itemsCount.textContent = items;
    refs.totalPrice.textContent = `$${price}`;
}

// Перезагрузка корзины
function refreshCart() {
    const ids = getCart('cart') || [];
    saveCart(ids);        
    updateNavCounts();    
    init();              
}

refs.productsList?.addEventListener('click', (e) => {
    onProductClick(e);
    setTimeout(refreshCart, 100);
});

refs.buyBtn?.addEventListener('click', () => {
    iziToast.success({
        title: 'Success!',
        message: 'Purchase successful!',
        position: 'topRight',
    });

    localStorage.removeItem('cart');
    updateNavCounts();
    init();
});

init();

