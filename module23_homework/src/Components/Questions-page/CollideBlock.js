import React, { Fragment } from 'react';

let answerDefault = "Данный вопрос обсуждается с собственником, но как правило автомобиль нужно вернуть туда, где вы его получили.";

const CollideBlock = ({question, answer=answerDefault}) => (
    <Fragment>
        <div class="questions__container-rect">
            <div>{question}</div>
            <div class="icon-arrow"></div>
        </div>
        <div class="questions__container-answer">{answer}</div>
    </Fragment>
)

export default CollideBlock;