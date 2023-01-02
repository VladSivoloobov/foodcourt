import React from "react";
import food from "../../img/main/food.png";
import star from "../../img/main/Vector.png";
import timer from "../../img/main/timer.png";
import "./Main.scss";
import { Counter } from "../UI/Counter";
import { BuyButton } from "../UI/BuyButton";
import { FoodCart } from "../UI/FoodCart";
import { FoodCards } from "../UI/FoodCards";

export const Main: React.FC = () => {
    return (
        <main className="main">
            <div className="main__left">
                <div className="container">
                    <div className="left__title">
                        <h1 className="title__bold">Закажи свою</h1>
                        <h2 className="title__thin">любимую Еду</h2>
                    </div>
                    <div className="left__description">
                        <p className="description__text">
                            Свежая и вкусная еда, которая стоит дешёво и сделает
                            вас сытым на целый день! Покупайте прямо сейчас!
                        </p>
                    </div>
                    <div className="left__price">
                        Стоимость : <span className="price__bold">24.30$</span>
                    </div>
                    <div className="left__buttons">
                        <Counter />
                        <BuyButton />
                    </div>
                    <div className="left__foods">
                        <FoodCards />
                    </div>
                </div>
            </div>
            <div className="main__right">
                <div className="right__image">
                    <img className="image__food" src={food} />
                    <div className="image__title">
                        <div className="title__content">
                            <span className="title__name">Салат</span>
                            <span className="title__rating">
                                <img src={star} />
                                4.7
                            </span>
                        </div>
                        <div className="title__time">
                            <img src={timer} />
                            10-18 Минут
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};
