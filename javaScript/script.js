let click = true;
var hamburgerMenu = document.getElementById("hamburger-menu");
var hamburgerButton = document.getElementById("hamburger-button");

function hamburgerToCross(x) {
    //The hamburgerToCross function toggle the appearance of the hamburger menu icon into a cross or "X" icon when it's called = clicked (and if the click is true).
    x.classList.toggle("rotate");

    // If click is true an animation is running revealing a slide-in menu
    if (click) {
        // hamburgerMenu.style.animationPlayState = "running";
        hamburgerMenu.style.animation = "slide-right 0.9s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1.000) forwards";
        hamburgerMenu.style.display = "flex";
        // hamburgerButton.style.position = "fixed";
        hamburgerButton.style.right= "0px";

        click = false;
    }

    else if (!click) {
        // hamburgerMenu.style.animationPlayState = "running";
        hamburgerMenu.style.animation = "slide-back 0.7s cubic-bezier(0.645, 0.045, 0.355, 1.000) forwards";
        hamburgerButton.style.position = "relative";

        click = true;
    }
}

// function reload(){
//   window.location.reload();
// }
let navbar = document.querySelector('.top-navigation')
let lastScrollTop = 0

window.onscroll = () =>{
  //
  let currentScrollPos = window.scrollY

    if(currentScrollPos > lastScrollTop + 3){
     navbar.style.top = "-10vh"

    }
    else if(currentScrollPos===0){
      navbar.style.top = "0"
    }
    else if(currentScrollPos<lastScrollTop - 3){
      navbar.style.top = "0"
    }

    lastScrollTop = currentScrollPos
}


// Swiper slider
// I have copied everything below!
// https://swiperjs.com/get-started#swiper-css-stylessize

const swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    slidesPerView: 1,

    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
        980: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
    },

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // And if we need scrollbar
    // scrollbar: {
    //   el: ".swiper-scrollbar",
    // },
  });
