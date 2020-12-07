import React, { Fragment } from 'react';
import logo from '../../img/logo.svg';
import HeaderMobile from './HeaderMobile';
import BurgerMenu from './BurgerMenu';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';
import DescrContacts from '../Index-page/DescrContacts';

const Header = () => (
    <Fragment>
        <header>
            <nav>
                <div className="navbar__container">
                    <a href="main.html" target="_blank" rel="nofollow">
                        <img src={ logo } className="navbar__brand-text" alt="logo" />
                    </a>
                    <div className="navbar__menu is-desktop">
                        <Router>
                            <Link to="/about" className="navbar__menu-item is-animated">О нас</Link>
                            <Route path="/about" component={DescrContacts} />
                            <a className="navbar__menu-item is-animated" href="https://www.google.com/" target="_blank" rel="nofollow">Условия</a>
                            <a className="navbar__menu-item is-animated" href="Questions.html" target="_blank" rel="nofollow">Частые вопросы</a>
                            <a className="navbar__menu-login is-animated" href="" target="_blank" rel="nofollow">Войти</a>
                        </Router>

                    </div>
                </div>
            </nav>
            <HeaderMobile />
            <BurgerMenu />
        </header>
    </Fragment>
);

export default Header;

