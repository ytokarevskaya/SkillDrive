import React from "react";
import ReactDOM from "react-dom";
import './styles/base.scss';
import App from "./components/index-page/App";
import Questions from "./components/Questions-page/Questions";

ReactDOM.render(<App />, document.getElementById("root"));

document.querySelectorAll(".navbar__menu-item")[0].addEventListener("click", function (){
    ReactDOM.render(<App />, document.getElementById("root"));
})

document.querySelectorAll(".navbar__menu-item")[2].addEventListener("click", function (){
    ReactDOM.render(<Questions />, document.getElementById("root"));
})