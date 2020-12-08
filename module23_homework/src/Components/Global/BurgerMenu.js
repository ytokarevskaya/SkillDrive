import React from 'react';
import {BurgerMenuActivate} from './BurgerMenuActivate';

const BurgerMenu = () => (
    <div className="mobile__burger is-active is-mobile" onClick={BurgerMenuActivate}>
        <div className="mobile__burger-rect"></div>
        <div className="mobile__burger-rect"></div>
        <div className="mobile__burger-rect"></div>
    </div>
)

export default BurgerMenu;