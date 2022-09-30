import { ButtonProducts, CardProduct } from "./styles";

export const Product = (props) => {
  const addCart = (id) => {
    const produto = props.list.find((e) => e.id === id);
    props.setCurrentSale(produto);
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
            addCart(props.id);
          }}
        >
          Adicionar
        </ButtonProducts>
      </div>
    </CardProduct>
  );
};
