import React from "react";
import arrow from "../../img/counter/arrow.png";
import "./Counter.scss";

export const Counter: React.FC = () => {
    return (
        <div className="counter">
            <div className="counter__botom-arrow">
                <img src={arrow} />
                <div className="counter__border"></div>
            </div>
            <div className="counter__value">2</div>
            <div className="counter__up-arrow">
                <img src={arrow} />
                <div className="counter__border"></div>
            </div>
        </div>
    );
};
