import { CartProduct } from "../CartProduct";
import { CartList } from "./styles";

export const CartProducts = (props) => {
  const removeAllProducts = () => {
    props.setCurrentSale([]);
  };

  const totalValue = props.list.reduce((acc, e) => acc + e.price, 0);

  const produtosCarrinho = props.list.map((e) => (
    <CartProduct
      id={e.id}
      key={e.id}
      name={e.name}
      category={e.category}
      price={e.price}
      img={e.img}
    />
  ));

  return (
    <CartList>
      {produtosCarrinho}
      <div className="cartValue">
        <div>
          <span>Total</span>
          <span>R${totalValue}</span>
        </div>
        <button type="submit" onClick={removeAllProducts}>
          Remover Todos
        </button>
      </div>
    </CartList>
  );
};
