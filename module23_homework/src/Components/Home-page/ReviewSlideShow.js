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