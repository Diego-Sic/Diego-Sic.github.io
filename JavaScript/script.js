/*This section will handle the manage of opening and closing the menu*/
const naviLink = document.querySelectorAll(".nav__link")
const navMenu = document.getElementById("nav-menu")
const navToggle = document.getElementById("nav-toggle")
const navClose = document.getElementById("nav-close")

/*Open the menu*/
if (navToggle){
    navToggle.addEventListener("click", 
    () => {navMenu.classList.add("show-menu")})
}

/*Close the menu with the x*/
if (navClose) {
    navClose.addEventListener("click", 
    () => {navMenu.classList.remove("show-menu")})
}
/*Close the menu if someone clicks something*/
function linkAction(){
    navMenu.classList.remove("show-menu")
}

naviLink.forEach(n => n.addEventListener("click", linkAction))

/*Swiper*/
let swiper = new Swiper(".portfolio__container", {
    cssMode: true,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});


const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

// Creating a division for the header
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 200) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

// Icon animation
gsap.from(".python",{opacity:0, duration:2, delay:0.5, x:60})
gsap.from(".github",{opacity:0, duration:2, delay:0.5, x:60})
gsap.from(".javascript",{opacity:0, duration:2, delay:0.5, x:60})
gsap.from(".html",{opacity:0, duration:2, delay:0.5, x:60})
gsap.from(".css",{opacity:0, duration:2, delay:0.5, x:60})
