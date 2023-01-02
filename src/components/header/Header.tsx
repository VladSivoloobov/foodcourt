import React from "react";
import { Links } from "./Links";
import cart from "../../img/header/cart.png";
import find from "../../img/header/find.png";
import registration from "../../img/header/registration.png";
import autentification from "../../img/header/autentification.png";
import "./Header.scss";

export const Header: React.FC = () => {
    return (
        <header className="header">
            <a className="header__logo">
                <span className="logo__green-letter">f</span>
                <span className="logo__orange-letter">o</span>
                <span className="logo__orange-letter">o</span>
                <span className="logo__green-letter">d</span>
                <span className="logo__red-letter">court</span>
            </a>
            <Links />
            <div className="header__buttons">
                <a className="buttons__cart" href="/">
                    <img src={cart} alt="" />
                    <span className="cart__counter">0</span>
                </a>
                <a className="buttons__find" href="/">
                    <img src={find} alt="" />
                </a>
            </div>
            <div className="header__account">
                <button className="account__registration">
                    <img src={registration} alt="" /> Регистрация
                </button>
                <button className="account__autentification">
                    <img src={autentification} alt="" /> Вход
                </button>
            </div>
        </header>
    );
};
