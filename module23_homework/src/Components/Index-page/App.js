import React, { Fragment } from 'react';
import Header from '../global/header';
import Footer from '../global/Footer';
import DescrContacts from './DescrContacts';
import Team from './Team';

const App = () => (
  <Fragment>
    <Header />
    <DescrContacts />
    <Team />
    <Footer />
  </Fragment>
)

export default App;

// const App = () => (
//   <Router>
//   <Link to="/home">Home</Link>
//   <Link to="/about">About</Link>       
//   <Route exact path="/home" component={page1} /> 
//   <Route exact path="/about" component={page2} />
// </Router>
// )