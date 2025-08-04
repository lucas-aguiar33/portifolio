// INICIAR BIBLIOTECA DE ANIMAÇÕES
AOS.init();

// BOTÕES
const menuHamburguer = document.querySelector(".btn-menu");
const btnCloseMenu = document.querySelector(".btn-close-menu");
const btnInfo = [...document.querySelectorAll(".btn-info")];
const btnCloseModal = [...document.querySelectorAll(".btn-close-modal")];
const btnForm = document.querySelector(".btn-enviar-form");

// MENU
const sidebar = document.querySelector(".sidebar");


menuHamburguer.addEventListener("click", ()=> {
    sidebar.classList.remove("hidden");
    document.documentElement.style.overflowY="hidden";   
})

btnCloseMenu.addEventListener("click", ()=> {
    sidebar.classList.add("hidden");
    document.documentElement.style.overflowY = "auto";
})

btnInfo.forEach(button => {
    button.addEventListener("click", (evt)=>{
        const el = evt.target;
        const modalCard = el.parentNode.nextElementSibling;
        modalCard.classList.remove("hidden");
    })
})

btnCloseModal.forEach(button => {
    button.addEventListener("click", (evt)=>{
        const el = evt.target.parentNode;
        const modalCard = el.parentNode.parentNode;
        modalCard.classList.add("hidden");
    })
})


