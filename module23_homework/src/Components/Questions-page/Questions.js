import React from 'react';
import womanImg from '../../img/Question-woman.svg';
import {CollideBlock, answerDefault} from './CollideBlock';

const Questions = () => (
    <Fragment>
      <Header />
      <main>
            <div class="questions__container">
                <img src={womanImg} alt="Woman with questions" />
                <h1>Частые вопросы</h1>
                <span>Отвечаем на вопросы, которые у вас могут возникнуть.</span>
            </div>
        </main>
      <Footer />
    </Fragment>
  )

export default Questions;