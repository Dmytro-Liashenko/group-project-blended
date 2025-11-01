import { STORAGE_KEYS } from './constants';

export function saveToLocalStorage(key, data) {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.log(`Error saving data to LS: ${error.message}`);
  }
}

export function getFromLocalStorage(key) {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.log(`Error getting data from LS: ${error.message}`);
    return null;
  }
}
export function getWishlistItems() {
  return getFromLocalStorage(STORAGE_KEYS.WISHLIST) || [];
}

export function saveCart(cart) {
  localStorage.setItem(STORAGE_KEYS.cart, JSON.stringify(cart));
}
export function getCart() {
  return JSON.parse(localStorage.getItem(STORAGE_KEYS.cart)) || [];
}

export function updateNavCounts() {
  const cartCountElement = document.querySelector('[data-cart-count]');
  const wishlistCountElement = document.querySelector('[data-wishlist-count]');

  const cart = getCart();
  const wishlist = getWishlistItems();

  if (cartCountElement) {
    cartCountElement.textContent = cart.length;
  }

  if (wishlistCountElement) {
    wishlistCountElement.textContent = wishlist.length;
  }
}

