import"./assets/styles-JE8YjOlG.js";import{a as c}from"./assets/vendor-CWxt7QI6.js";const p="https://dummyjson.com",i={CATEGORIES:"/products/category-list",PRODUCTS:"/products",PRODUCTS_BY_ID:"/products/",PRODUCTS_BY_CATEGORY:"/products/category/",SEARCH:"/products/search"};c.defaults.baseURL=p;async function m(){return(await c.get(i.CATEGORIES)).data}async function _(t){const e={limit:12,skip:(t-1)*12};return(await c.get(i.PRODUCTS,{params:e})).data}const o={modal:document.querySelector(".modal"),modalCloseBtn:document.querySelector(".modal__close-btn"),productsList:document.querySelector(".products"),categoriesList:document.querySelector(".categories")};function g(t){const s=["All",...t].map(r=>`<li class="categories__item">
    <button class="categories__btn" type="button">${r}</button>
  </li>
        `).join("");o.categoriesList.insertAdjacentHTML("beforeend",s)}function y(t){const e=t.map(({id:s,thumbnail:r,title:a,brand:d,category:l,price:u})=>`<li class="products__item" data-id="${s}">
        <img class="products__image" src="${r}" alt="${a}" />
        <p class="products__title">${a}</p>
        <p class="products__brand">
          <span class="products__brand--bold">Brand: ${d}</span>
        </p>
        <p class="products__category">Category: ${l}</p>
        <p class="products__price">Price: ${u}$</p>
      </li>`).join("");o.productsList.insertAdjacentHTML("beforeend",e)}let f=1;async function C(){try{const t=await m();g(t);const{products:e}=await _(f);y(e)}catch(t){console.log("error initial home page",t)}}function n(){o.modal.classList.remove("modal--is-open"),document.body.style.overflow="",window.removeEventListener("keydown",E),o.modal.removeEventListener("click",L)}function E(t){t.code==="Escape"&&n()}function L(t){t.target===t.currentTarget&&n()}o.modalCloseBtn.addEventListener("click",n);document.addEventListener("DOMContentLoaded",C);
//# sourceMappingURL=index.js.map
