import { navFunction } from "./nav";
import { homeFunction } from "./home";
import { menuFunction } from "./menu";
import { contactFunction } from "./contact";
import { removeFunction } from "./remove";

navFunction();
homeFunction();

const homeBtn = document.querySelector('.home');
homeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    removeFunction();
    homeFunction();
})

const menuBtn = document.querySelector('.menu');
menuBtn.addEventListener('click', (e) => {
    e.preventDefault();
    removeFunction();
    menuFunction();
})

const contactBtn = document.querySelector('.contact');
contactBtn.addEventListener('click', (e) => {
    e.preventDefault();
    removeFunction();
    contactFunction();
})