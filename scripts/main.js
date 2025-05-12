/* toggle */
const navslide=()=>{
    const burger= document.querySelector(".burger");
    const navList= document.querySelector("nav");

    burger.addEventListener("click", ()=> {
        navList.classList.toggle("nav-active");
        burger.classList.toggle("toggle-burger");
    });
};

navslide();

// clear form before unload

window.onbeforeunload = ()=> {
    for (const form of document.getElementsByTagName("form")){
        form.reset();
    }
};