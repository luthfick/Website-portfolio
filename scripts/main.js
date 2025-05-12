/* toggle */
const navSlide=()=>{
    const burger= document.querySelector(".burger");
    const navList= document.querySelector("nav");

    burger.addEventListener("click", () => {
        navList.classList.toggle("nav-active");
        burger.classList.toggle("toggle-burger");
    });
};

navSlide();

// Toggle menu on mobile
const burger = document.querySelector('.burger');
const nav = document.querySelector('nav');

burger.addEventListener('click', () => {
  nav.classList.toggle('nav-active');
  burger.classList.toggle('toggle-burger');
});

// clear form before unload

window.onbeforeunload = ()=> {
    for (const form of document.getElementsByTagName("form")){
        form.reset();
    }
};