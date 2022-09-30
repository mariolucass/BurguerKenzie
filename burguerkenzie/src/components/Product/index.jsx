import { ButtonProducts, CardProduct } from "./styles";
import { toast } from "react-toastify";

export const Product = (props) => {
  const notify = (name) => {
    toast(`Esse produto já se encontra no carrinho: ${name}`);
  };

  const addCart = (id, name) => {
    const produto = props.list.find((e) => e.id === id);

    props.cartList.find((e) => e.id === id)
      ? notify(name)
      : props.setCurrentSale((cartList) => [...cartList, produto]);
  };

  return (
    <CardProduct>
      <div className="imgDiv">
        <img src={props.img} alt={props.name} />
      </div>

      <div className="textDiv">
        <h3>{props.name}</h3>
        <span>{props.category}</span>
        <span className="spanPrice">R$ {props.price}</span>
        <ButtonProducts
          id={props.id}
          onClick={() => {
            addCart(props.id, props.name);
          }}
        >
          Adicionar
        </ButtonProducts>
      </div>
    </CardProduct>
  );
};
