import React, { Fragment } from 'react';
import {CollapsibleFunc} from './CollapsibleFunc';

const answer = "Данный вопрос обсуждается с собственником, но как правило автомобиль нужно вернуть туда, где вы его получили."

const questionsArr = [
    "Могу ли я отменить бронь?",
    "Могу ли я вернуть деньги, если не подошёл автомобиль?",
    "Что делать, если случилось ДТП?",
    "Могу ли я оставить автомобиль в удобном для меня месте?",
    "Что делать, если собственник просит заплатить ему напрямую?",
    "Должен ли я заправлять автомобиль?"
];

const CollapsibleBlock = () => (
    <Fragment>
        {questionsArr.map(el => (
            <Fragment>
            <div className="questions__container-rect" onClick={CollapsibleFunc}>
                <div key={el.id}>{el}</div>
                <div className="icon-arrow"></div>
            </div>
            <div className="questions__container-answer">{answer}</div>
            </Fragment>
        ))}
    </Fragment>
)

export default CollapsibleBlock;