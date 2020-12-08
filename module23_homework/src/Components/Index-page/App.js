import React, { Fragment } from 'react';
import Header from '../global/header';
import Footer from '../global/Footer';
import DescrContacts from './DescrContacts';
import Team from './Team';
import womanImg from '../../img/Question-woman.svg';
import CollideBlock from '../questions-page/CollideBlock';

const App = () => (
  <Fragment>
  <Header />
  <main>
        <div class="questions__container">
            <img src={womanImg} alt="Woman with questions" />
            <h1>Частые вопросы</h1>
            <span>Отвечаем на вопросы, которые у вас могут возникнуть.</span>
            <CollideBlock />
        </div>
    </main>
  <Footer />
</Fragment>
)

export default App;

// const App = () => (
//   <Fragment>
//     <Header />
//     <DescrContacts />
//     <Team />
//     <Footer />
//   </Fragment>
// )