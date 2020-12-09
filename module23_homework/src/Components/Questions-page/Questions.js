import React, { Fragment } from 'react';
import womanImg from '../../img/Question-woman.svg';
import Header from '../global/header';
import Footer from '../global/Footer';
import CollapsibleBlock from './CollapsibleBlock';

const Questions = () => (
    <Fragment>
      <Header />
      <main>
            <div className="questions__container">
                <img src={womanImg} alt="Woman with questions" />
                <h1>Частые вопросы</h1>
                <span>Отвечаем на вопросы, которые у вас могут возникнуть.</span>
                <CollapsibleBlock />
            </div>
        </main>
      <Footer />
    </Fragment>
  )

export default Questions;