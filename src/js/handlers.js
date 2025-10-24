import { getCategories, getProducts } from "./products-api";
import { renderCategories, renderProducts } from "./render-function";
import { getWishlistItems } from "./storage";

let currentPage = 1

export async function initHomePage(){
    try{
        const categories = await getCategories()
        renderCategories(categories);
        const {products} = await getProducts(currentPage);
        renderProducts(products)
        
    }
    catch(error){
        console.log("error initial home page", error);
        
    }

}