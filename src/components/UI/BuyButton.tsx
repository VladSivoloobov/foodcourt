import React from "react";
import cart from "../../img/main/cart.png";
import "./BuyButton.scss";

export const BuyButton: React.FC = () => {
    return (
        <button className="buyButton">
            <span className="background">
                <img src={cart} alt="" />
            </span>
            <span className="text">Заказать</span>
        </button>
    );
};
