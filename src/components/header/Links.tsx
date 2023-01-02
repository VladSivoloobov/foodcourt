import React from "react";

export const Links: React.FC = () => {
    return (
        <ul className="header__links">
            <li className="links__link active">
                <a href="/">Главная</a>
            </li>
            <li className="links__link">
                <a href="/">Меню</a>
            </li>
            <li className="links__link">
                <a href="/">Магазин</a>
            </li>
            <li className="links__link">
                <a href="/">Сервис</a>
            </li>
        </ul>
    );
};
