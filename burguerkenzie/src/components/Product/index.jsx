import { ButtonProducts, CardProduct } from "./styles";

export const Product = (props) => {
  const addCart = () => {};

  return (
    <CardProduct>
      <div className="imgDiv">
        <img src={props.img} alt={props.name} />
      </div>
      <div className="textDiv">
        <h3>{props.name}</h3>
        <span>{props.category}</span>
        <span>{props.price}</span>
        <ButtonProducts id={props.id} onClick={addCart}>
          Adicionar
        </ButtonProducts>
      </div>
    </CardProduct>
  );
};
