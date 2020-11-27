const mobileBurger = document.querySelector(".mobile__burger"),
    mobileMenu = document.querySelector(".mobile__wrapper");

mobileBurger.addEventListener("click", function () {
    if(mobileBurger.classList.contains('is-active')) {
        document.querySelectorAll(".mobile__burger-rect").forEach((el,i) => {
        el.style.animation = `rect-${i} 1s ease-in-out both`; })
        mobileBurger.classList.toggle('is-active');
        mobileMenu.classList.toggle("is-active");
        //Воздействие на элементы с позиционированием absolute
        document.querySelectorAll(".ignore_menu").forEach(el => el.style.opacity = 0.05);
        document.querySelectorAll(".ignore_menu").forEach(el => el.style.pointerEvents = "none");
    } else {
        document.querySelectorAll(".mobile__burger-rect").forEach((el,i) => {
        el.style.animation = `rect-${i+3} 0.8s ease-out both reverse`; })
        mobileBurger.classList.toggle('is-active');
        mobileMenu.classList.toggle("is-active");

        document.querySelectorAll(".ignore_menu").forEach(el => el.style.opacity = 1);
        document.querySelectorAll(".ignore_menu").forEach(el => el.style.pointerEvents = "all");

    }
})

document.querySelectorAll(".questions__container-rect").forEach((el,i) => {
    el.addEventListener("click", function(){
        if(!document.querySelectorAll(".questions__container-answer")[i].classList.contains("is-active")) {
            el.classList.add("is-active");
            document.querySelectorAll(".questions__container-answer")[i].style.maxHeight = document.querySelectorAll(".questions__container-answer")[i].scrollHeight + "px";
            document.querySelectorAll(".icon-arrow")[i].classList.add("is-active");
        } else {
            el.classList.remove("is-active");
            document.querySelectorAll(".questions__container-answer")[i].style.maxHeight = 0;
            document.querySelectorAll(".icon-arrow")[i].classList.remove("is-active");
        }
        document.querySelectorAll(".questions__container-answer")[i].classList.toggle("is-active");
    })
});

/* review in Main-page */

let slideShowCount = 1;
let arrReviewImg = document.querySelector(".review__container").querySelectorAll("img");

document.querySelector(".review__container").querySelectorAll(".icon-arrow")[0]
.addEventListener("click", function () {
    slideShowCount > 0 ? slideShowCount -= 1 : slideShowCount = 3;
    document.querySelector(".review__container-slide__show-rect").innerHTML =
    `<div class="wrapper">
    <img src="${reviewImg[slideShowCount]}" alt="Client's portrait">
    <div class="review__container-slide__show-rect-text">
        <span class="review__container-slide__show-rect-text-name">${reviewName[slideShowCount]}</span>
        <span class="review__container-slide__show-rect-text-city">${reviewCity[slideShowCount]}</span>
    </div>
</div>
<span class="review__container-slide__show-rect-text-monolog">${reviewMonolog[slideShowCount]}</span>`
})

document.querySelector(".review__container").querySelectorAll(".icon-arrow")[1]
.addEventListener("click", function () {
    slideShowCount < 3 ? slideShowCount += 1 : slideShowCount = 0;
    arrReviewImg.forEach(el => { el.classList.remove("is-active"); });
    arrReviewImg[slideShowCount].classList.add("is-active");
})

document.querySelectorAll(".review__container-circles-circle").forEach((el,i) => {
    el.addEventListener("click", function () {
        slideShowCount = i;
        document.querySelector(".review__container-slide__show-rect").innerHTML =
        `<div class="wrapper">
        <img src="${reviewImg[i]}" alt="Client's portrait">
        <div class="review__container-slide__show-rect-text">
            <span class="review__container-slide__show-rect-text-name">${reviewName[i]}</span>
            <span class="review__container-slide__show-rect-text-city">${reviewCity[i]}</span>
        </div>
    </div>
    <span class="review__container-slide__show-rect-text-monolog">${reviewMonolog[i]}</span>`
    })
})

