let btnMenu = document.getElementById('btn-menu');
let menuMobile = document.getElementById('menu-mobile');
let overlayMenu = document.getElementById('overlay-menu');

btnMenu.addEventListener('click', ()=>{
    menuMobile.classList.add('menu-mobile-ativo');
});

menuMobile.addEventListener('click', ()=>{
    menuMobile.classList.remove('menu-mobile-ativo');
});

overlayMenu.addEventListener('click', ()=>{
    menuMobile.classList.remove('menu-mobile-ativo');
});