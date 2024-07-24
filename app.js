const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,  
});

const byId =  eleId => document.getElementById(eleId);

const card1   = byId('card-1-desktop');
const card2   = byId('card-2-desktop');
const card3   = byId('card-3-desktop');
const card4   = byId('card-4-desktop');
const card5  = byId('card-5-desktop');

window.addEventListener('scroll',()=>{
  
})
const hamburgerMenu = byId('hamburger-menu');
