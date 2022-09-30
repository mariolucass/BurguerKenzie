import { useState } from "react";
import { CartProducts } from "../CartProducts";
import { DivCarrinho } from "./styles";

export const Cart = (props) => {
  console.log(props.list);

  return (
    <DivCarrinho>
      <div className="labelCart">
        <h4>Carrinho de compras</h4>
      </div>

      {props.list.length ? (
        <CartProducts
          setCurrentSale={props.setCurrentSale}
          list={props.list}
        ></CartProducts>
      ) : (
        <div className="divNoProduct">
          <h3>Sua sacola está vazia</h3>
          <span>Adicione itens</span>
        </div>
      )}

      <div className="divPrice"></div>
    </DivCarrinho>
  );
};
