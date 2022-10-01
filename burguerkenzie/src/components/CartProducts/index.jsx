import { CartProduct } from "../CartProduct";
import { CartList } from "./styles";

export const CartProducts = (props) => {
  const removeAllProducts = () => {
    props.setCurrentSale([]);
  };

  const totalValue = props.list.reduce((acc, e) => acc + e.price, 0).toFixed(2);

  const produtosCarrinho = props.list.map((e) => (
    <CartProduct
      id={e.id}
      key={e.id}
      name={e.name}
      category={e.category}
      price={e.price}
      img={e.img}
      cartList={props.list}
      setCurrentSale={props.setCurrentSale}
    />
  ));

  return (
    <CartList>
      {produtosCarrinho}
      <div className="cartValue">
        <div>
          <span>Total</span>
          <span className="totalValue">R${totalValue}</span>
        </div>
        <button type="submit" onClick={removeAllProducts}>
          Remover Todos
        </button>
      </div>
    </CartList>
  );
};
