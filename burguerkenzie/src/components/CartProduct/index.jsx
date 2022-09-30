import { ButtonRemove, CartProductLi } from "./styles";

export const CartProduct = (props) => {
  const removeCart = (id) => {
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
        <ButtonRemove id={props.id} onClick={() => removeCart(props.id)}>
          Remover
        </ButtonRemove>
      </div>
    </CartProductLi>
  );
};
