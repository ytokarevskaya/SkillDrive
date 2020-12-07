import React from 'react';
import logoMobile from '../img/logo.svg';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';

const HeaderMobile = () => (
    <div class="mobile__wrapper is-mobile is-active is-animated">
        <img src={ logoMobile } class="navbar__brand-mobil" alt="logo"></img>
        <div class="menu__mobile-container">
            <nav class="menu__mobile">
                <a href="About.html" class="menu__mobile-link is-animated">О нас</a>
                <div class="menu__mobile-rect"></div>
                <a href="" class="menu__mobile-link is-animated">Условия</a>
                <div class="menu__mobile-rect"></div>
                <a href="Questions.html" class="menu__mobile-link is-animated">Частые вопросы</a>
            </nav>
            <a class="menu__login is-animated" href="" target="_blank" rel="nofollow">Войти</a>
        </div>
    </div>
)

export default HeaderMobile;