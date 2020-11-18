let menu = document.querySelector(".navbar__container-gamburger");

menu.addEventListener("click", function () {
    if(this.classList.contains('is-close')) {
        document.querySelectorAll(".navbar__container-gamburger-rect").forEach((el,i) => {
        el.style.animation = `rect-${i} 1.4s ease-in-out both`; })
        setTimeout(() => { this.classList.remove('is-close') }, 1400);
        document.querySelector(".menu__mobile").style.opacity = 1;
        document.querySelector("main").style.opacity = 0;
        document.querySelector("footer").style.display = "none";
    } else {
        document.querySelectorAll(".navbar__container-gamburger-rect").forEach((el,i) => {
        el.style.animation = `rect-${i+3} 1s ease-out both reverse`; })
        setTimeout(() => { 
          this.classList.add('is-close') 
        }, 1000);
        document.querySelector(".menu__mobile").style.opacity = 0;
        document.querySelector("main").style.opacity = 1;
        document.querySelector("footer").style.display = "block";
    }
})