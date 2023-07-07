
const navMobile = document.querySelector(".nav__mobile");
const hamburger = document.querySelector(".hamburger")

hamburger.addEventListener('click',()=>{
    navMobile.classList.toggle("show");
    hamburger.classList.toggle("show");
})

