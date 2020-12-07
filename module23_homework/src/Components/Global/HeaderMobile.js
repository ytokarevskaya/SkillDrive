import React from 'react';
import logoMobile from '../../img/logo.svg';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';

const HeaderMobile = () => (
    <div className="mobile__wrapper is-mobile is-active is-animated">
        <img src={ logoMobile } className="navbar__brand-mobil" alt="logo" />
        <div className="menu__mobile-container">
            <nav className="menu__mobile">
                <a href="About.html" className="menu__mobile-link is-animated">О нас</a>
                <div className="menu__mobile-rect"></div>
                <a href="" className="menu__mobile-link is-animated">Условия</a>
                <div className="menu__mobile-rect"></div>
                <a href="Questions.html" className="menu__mobile-link is-animated">Частые вопросы</a>
            </nav>
            <a className="menu__login is-animated" href="" target="_blank" rel="nofollow">Войти</a>
        </div>
    </div>
)

export default HeaderMobile;