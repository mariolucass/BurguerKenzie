import { useState } from "react";
import { ProductsList } from "../ProductsList";
import { DivCarrinho } from "./styles";

export const Cart = (props) => {
  const [cartTotal, setCartTotal] = useState(0);
  const productsCart = <ProductsList list={"lista"} />;

  return (
    <DivCarrinho>
      <div className="labelCart">
        <h4>Carrinho de compras</h4>
      </div>
      <div className="containerProducts">
        {props.list.length ? (
          productsCart
        ) : (
          <div className="divNoProduct">
            <h3>Sua sacola está vazia</h3>
            <span>Adicione itens</span>
          </div>
        )}
      </div>
    </DivCarrinho>
  );
};
