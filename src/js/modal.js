import { refs } from "./refs";



export function openModal(){

    refs.modal.classList.add("modal--is-open")
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onEscKeyPress);
    refs.modal.addEventListener("click", onBackdropClick)
}

export function closeModal(){
    refs.modal.classList.remove("modal--is-open")
    document.body.style.overflow = "";
    window.removeEventListener("keydown", onEscKeyPress);
    refs.modal.removeEventListener("click", onBackdropClick)
}
export function addToWishlist(){

}
export function addToCard(){

}
function onEscKeyPress(event){
    if(event.code === "Escape"){
        closeModal()
    }
}
function onBackdropClick(event){
    if(event.target === event.currentTarget){
        closeModal()
    }

}