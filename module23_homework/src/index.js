import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from 'react-router-dom';
import './styles/glyphter.scss';
import './styles/font-rule.scss';
import "./styles/breakpoints.scss";
import './styles/base.scss';

import App from "./Components/app";


ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>, 
document.getElementById("root"));