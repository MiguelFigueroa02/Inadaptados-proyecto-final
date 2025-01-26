window.onscroll = function() {
    let menuFondo = document.querySelector(".menu-nav");
    let menuLetters = document.querySelectorAll(".color-a-Inic");
    let logo = document.querySelector(".logo");

    if (window.scrollY > window.innerHeight) {
        // Cambiar clases para estado de scroll
        menuLetters.forEach(menuLetter => {
            menuLetter.classList.add('color-a-fin');
        });
        menuFondo.classList.add('color-fondo');
        logo.src = "./img/vv-logo-cafe.png";
    } else {
        // Restaurar clases originales
        menuLetters.forEach(menuLetter => {
            menuLetter.classList.remove('color-a-fin');
        });
        menuFondo.classList.remove('color-fondo');
        logo.src = "./img/vv-logo.png";
    }
};
var splide = new Splide( '#galeria-destinos', {
    perPage: 3,
    perMove:1,
    rewind : true,
    rewindSpeed: 2000,
    arrows: true,
    pagination: false,
  } );
  splide.mount();
  
var splide = new Splide( '#experiencias-test', {
    type   : 'loop',
    perPage: 2,
    perMove:1,
    padding: '3rem',
    /*autoWidth: true,
    autoheight: true,*/
    pagination: false,
  } );
  splide.mount();