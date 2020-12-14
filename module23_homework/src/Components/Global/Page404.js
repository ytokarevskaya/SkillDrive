import React from 'react';
import imgErr from '../../img/error-404.svg';
import logo from '../../img/logo.svg';
import { Link } from 'react-router-dom';

const Page404 = () => (
    <div class="error404__container">
        <img src={logo} alt="Logo" />
        <img src={imgErr} class="error404__container-ufo" alt="UFO hunting a car" />
        <h1>Такой страницы нет</h1>
        <span>Возможно, вы ошиблись в адресе страницы, либо она была удалена.</span>
        <Link to="/" rel="nofollow">
            <button>Перейти на главную</button>
        </Link>
    </div>
);

export default Page404;