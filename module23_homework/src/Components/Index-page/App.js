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
    <DescrContacts />
    <Team />
    <Footer />
  </Fragment>
)

export default App;