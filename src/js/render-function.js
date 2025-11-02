import { refs } from './refs';

export function renderCategories(categories) {
  const categoriesAll = ["All", ...categories]
  const markup = categoriesAll
    .map(
      category =>
        `<li class="categories__item">
    <button class="categories__btn" type="button">${category}</button>
  </li>
        `
    )
    .join('');
  refs.categoriesList.insertAdjacentHTML('beforeend', markup);
}

export function renderProducts(products) {
  
  const markup = products
    .map(({ id, thumbnail, title, brand, category, price }) => {
      return `<li class="products__item" data-id="${id}">
        <img class="products__image" src="${thumbnail}" alt="${title}" />
        <p class="products__title">${title}</p>
        <p class="products__brand">
          <span class="products__brand--bold">Brand: ${brand}</span>
        </p>
        <p class="products__category">Category: ${category}</p>
        <p class="products__price">Price: ${price}$</p>
      </li>`;
    })
    .join("");
  refs.productsList.insertAdjacentHTML('beforeend', markup);
}

export function showNotFound(show = true) {
  const el = document.querySelector('.not-found');
  if (el) el.style.display = show ? 'flex' : 'none';
}

export function showLoader(show = true) {
  const el = document.querySelector('.loader');
  if (el) el.style.display = show ? 'block' : 'none';
}