import React, { Fragment } from 'react';
import logo from '../img/logo.svg';
import HeaderMobile from './HeaderMobile';
import BurgerMenu from './BurgerMenu';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';

const Header = () => (
    <Fragment>
        <header>
            <nav>
                <div class="navbar__container">
                    <a href="main.html" target="_blank" rel="nofollow">
                        <img src={ logo } class="navbar__brand-text" alt="logo"></img>
                    </a>
                    <div class="navbar__menu is-desktop">
                        <a class="navbar__menu-item is-animated" href="About.html" target="_blank" rel="nofollow">О нас</a>
                        <a class="navbar__menu-item is-animated" href="https://www.google.com/" target="_blank" rel="nofollow">Условия</a>
                        <a class="navbar__menu-item is-animated" href="Questions.html" target="_blank" rel="nofollow">Частые вопросы</a>
                        <a class="navbar__menu-login is-animated" href="" target="_blank" rel="nofollow">Войти</a>
                    </div>
                </div>
            </nav>
            <HeaderMobile />
            <BurgerMenu />
        </header>
    </Fragment>
);

export default Header;