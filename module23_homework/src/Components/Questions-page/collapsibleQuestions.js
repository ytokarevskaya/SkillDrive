const rectsQuestions = document.querySelectorAll(".questions__container-rect"), //серые прямоугольники
    answers = document.querySelectorAll(".questions__container-answer"), //появляющиеся ответы
    arrowsQuestions = document.querySelectorAll(".icon-arrow"); //переворачивающиеся стрелочки

export function collapsibleQuestions () {
    rectsQuestions.forEach((el, i) => {
        el.addEventListener("click", function () {
            if (!answers[i].classList.contains("is-active")) {
                el.classList.add("is-active");
                answers[i].style.maxHeight = answers[i].scrollHeight + "px";
                arrowsQuestions[i].classList.add("is-active");
            } else {
                el.classList.remove("is-active");
                answers[i].style.maxHeight = 0;
                arrowsQuestions[i].classList.remove("is-active");
            }
            answers[i].classList.toggle("is-active");
        });
    });
}