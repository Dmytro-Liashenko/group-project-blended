import{a as s}from"./vendor-Ddu0QL_4.js";const f={WISHLIST:"wishlist",CART:"cart",THEME:"theme"},l="https://dummyjson.com",r={CATEGORIES:"/products/category-list",PRODUCTS:"/products",PRODUCTS_BY_ID:"/products/",PRODUCTS_BY_CATEGORY:"/products/category/",SEARCH:"/products/search"};s.defaults.baseURL=l;async function p(){return(await s.get(r.CATEGORIES)).data}async function _(t){const e={limit:12,skip:(t-1)*12};return(await s.get(r.PRODUCTS,{params:e})).data}async function P(t){return(await s.get(`${r.PRODUCTS_BY_ID}${t}`)).data}const n={modal:document.querySelector(".modal"),modalCloseBtn:document.querySelector(".modal__close-btn"),productsList:document.querySelector(".products"),categoriesList:document.querySelector(".categories")};function g(t){const o=["All",...t].map(c=>`<li class="categories__item">
    <button class="categories__btn" type="button">${c}</button>
  </li>
        `).join("");n.categoriesList.insertAdjacentHTML("beforeend",o)}function m(t){const e=t.map(({id:o,thumbnail:c,title:a,brand:i,category:u,price:d})=>`<li class="products__item" data-id="${o}">
        <img class="products__image" src="${c}" alt="${a}" />
        <p class="products__title">${a}</p>
        <p class="products__brand">
          <span class="products__brand--bold">Brand: ${i}</span>
        </p>
        <p class="products__category">Category: ${u}</p>
        <p class="products__price">Price: ${d}$</p>
      </li>`).join("");n.productsList.insertAdjacentHTML("beforeend",e)}function C(t=!0){const e=document.querySelector(".not-found");e&&(e.style.display=t?"flex":"none")}function T(t=!0){const e=document.querySelector(".loader");e&&(e.style.display=t?"block":"none")}let y=1;async function A(){try{const t=await p();g(t);const{products:e}=await _(y);m(e)}catch(t){console.log("error initial home page",t)}}function b(t){console.log("Product clicked!",t)}export{f as S,C as a,m as b,P as g,A as i,b as o,n as r,T as s};
//# sourceMappingURL=handlers-CeB5icqR.js.map
