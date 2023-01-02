import React from "react";

export const FoodCart: React.FC<{
    className: string;
    img: string;
    name: string;
    price: number;
}> = (props) => {
    return (
        <div className={`foodCard ${props.className}`}>
            <img src={props.img} />
            <div className="name">{props.name}</div>
            <div className="price">
                <span className="dollar">$ </span>
                {props.price}
            </div>
        </div>
    );
};
