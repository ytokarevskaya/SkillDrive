export const BurgerMenuActivate = () => {
    if (document.querySelector(".mobile__burger").classList.contains('is-active')) {
        document.querySelectorAll(".mobile__burger-rect").forEach((el, i) => {
            el.style.animation = `rect-${i} 1s ease-in-out both`;
        });
        document.querySelector(".mobile__burger").classList.toggle('is-active');
        document.querySelector(".mobile__wrapper").classList.toggle("is-active");;
    } else {
        document.querySelectorAll(".mobile__burger-rect").forEach((el, i) => {
            el.style.animation = `rect-${i + 3} 0.8s ease-out both reverse`;
        });
        document.querySelector(".mobile__burger").classList.toggle('is-active');
        document.querySelector(".mobile__wrapper").classList.toggle("is-active");
    }
}
