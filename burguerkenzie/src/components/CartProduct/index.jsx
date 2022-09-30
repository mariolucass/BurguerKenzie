import { ButtonRemove, CartProductLi } from "./styles";

export const CartProduct = (props) => {
  const removeCart = (id) => {
    const element = props.cartList.find((e) => e.id === id);
    const product = props.cartList.indexOf(element);

    props.cartList.length === 1
      ? props.setCurrentSale([])
      : props.setCurrentSale(props.cartList.splice(product, 1));
  };

  return (
    <CartProductLi>
      <div className="imgDiv">
        <img src={props.img} alt={props.name} />
      </div>

      <div className="textDiv">
        <h3>{props.name}</h3>
        <span>{props.category}</span>
      </div>

      <ButtonRemove id={props.id} onClick={() => removeCart(props.id)}>
        Remover
      </ButtonRemove>
    </CartProductLi>
  );
};
