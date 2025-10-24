import { initHomePage } from "./js/handlers";
import { closeModal } from "./js/modal";
import { refs } from "./js/refs";


//Логіка сторінки Home

refs.modalCloseBtn.addEventListener("click", closeModal)

document.addEventListener("DOMContentLoaded", initHomePage)