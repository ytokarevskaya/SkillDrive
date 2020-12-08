import React, { Fragment } from 'react';

const rectsQuestions = document.querySelectorAll(".questions__container-rect"),
    answers = document.querySelectorAll(".questions__container-answer"),
    arrowsQuestions = document.querySelectorAll(".icon-arrow");

let answerDefault = "Данный вопрос обсуждается с собственником, но как правило автомобиль нужно вернуть туда, где вы его получили.";

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

const questionsArr = [
    "Могу ли я отменить бронь?",
    "Могу ли я вернуть деньги, если не подошёл автомобиль?",
    "Что делать, если случилось ДТП?",
    "Могу ли я оставить автомобиль в удобном для меня месте?",
    "Что делать, если собственник просит заплатить ему напрямую?",
    "Должен ли я заправлять автомобиль?"
];

const CollideBlock = () => (
    <Fragment>
        {questionsArr.map((el,i) => (
            <Fragment>
            <div class="questions__container-rect">
                <div>{el}</div>
                <div class="icon-arrow"></div>
            </div>
            <div class="questions__container-answer">{answerDefault}</div>
            </Fragment>
        ))}
    </Fragment>
)

export default CollideBlock;