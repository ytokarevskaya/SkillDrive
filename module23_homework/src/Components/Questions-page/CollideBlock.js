import React, { Fragment } from 'react';

let answerDefault = "Данный вопрос обсуждается с собственником, но как правило автомобиль нужно вернуть туда, где вы его получили.";

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
        {questionsArr.map(el => (
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