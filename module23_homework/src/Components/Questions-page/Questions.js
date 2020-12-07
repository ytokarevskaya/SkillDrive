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
                <CollideBlock question="Могу ли я отменить бронь?"/>
                <CollideBlock question="Могу ли я вернуть деньги, если не подошёл автомобиль?"/>
                <CollideBlock question="Что делать, если случилось ДТП?"/>
                <CollideBlock question="Могу ли я оставить автомобиль в удобном для меня месте?"/>
                <CollideBlock question="Что делать, если собственник просит заплатить ему напрямую?"/>
                <CollideBlock question="Должен ли я заправлять автомобиль?"/>
            </div>
        </main>
      <Footer />
    </Fragment>
  )

export default Questions;