import { useState } from "react";
import { ButtonRemove, CartProductLi } from "./styles";

export const CartProduct = (props) => {
  const removeCart = () => {
    console.log(props.list);
  };

  return (
    <CartProductLi>
      <div className="imgDiv">
        <img src={props.img} alt={props.name} />
      </div>

      <div className="textDiv">
        <h3>{props.name}</h3>
        <span>{props.category}</span>
        <span>{props.price}</span>
        <ButtonRemove id={props.id} onClick={removeCart}>
          Remover
        </ButtonRemove>
      </div>
    </CartProductLi>
  );
};
