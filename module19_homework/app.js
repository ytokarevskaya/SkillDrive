let mobileBurger = document.querySelector(".mobile__burger"),
    mobileMenu = document.querySelector(".menu__mobile");

mobileBurger.addEventListener("click", function () {
    if(mobileBurger.classList.contains('is-active')) {
        document.querySelectorAll(".mobile__burger-rect").forEach((el,i) => {
        el.style.animation = `rect-${i} 1s ease-in-out both`; })
        mobileBurger.classList.remove('is-active');
        mobileMenu.classList.remove("is-active");
    } else {
        document.querySelectorAll(".mobile__burger-rect").forEach((el,i) => {
        el.style.animation = `rect-${i+3} 0.8s ease-out both reverse`; })
        mobileBurger.classList.add('is-active');
        mobileMenu.classList.add("is-active");

    }
})




// parentMobWrapper.insertBefore(menu,document.querySelector(".menu__mobile"));