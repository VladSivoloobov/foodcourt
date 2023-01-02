import React from "react";
import { FoodCart } from "./FoodCart";
import burger from "../../img/main/burger.png";
import donut from "../../img/main/donut.png";
import coffee from "../../img/main/coffee.png";
import arrow from "../../img/main/left.png";
import "./FoodCards.scss";

export const FoodCards: React.FC = () => {
    return (
        <div className="FoodCards">
            <div className="leftArrow">
                <img src={arrow} />
            </div>
            <FoodCart
                className="green"
                img={burger}
                name="Бургер"
                price={12.8}
            />
            <FoodCart
                className="pinked"
                img={donut}
                name="Пончик"
                price={3.99}
            />
            <FoodCart
                className="purple"
                img={coffee}
                name="Кофе"
                price={5.25}
            />
            <div className="rightArrow">
                <img src={arrow} alt="" />
            </div>
        </div>
    );
};
