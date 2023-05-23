import { CartList } from "./styles";
import { CartProduct } from "../CartProduct";
import { useCartContext } from "../../contexts";

export const CartProducts = () => {
  const { setCurrentSale, currentSale } = useCartContext();
  const handleRemoveAllProducts = () => setCurrentSale([]);

  const totalValue = currentSale
    .reduce((acc, e) => acc + e.price * e.quantity, 0)
    .toFixed(2);

  const renderCartProducts = currentSale.map((elem) => (
    <CartProduct key={elem.id} product={elem} />
  ));

  return (
    <CartList>
      {renderCartProducts}

      <div className="cartValue">
        <div>
          <span>Total</span>
          <span className="totalValue">R${totalValue}</span>
        </div>

        <button type="submit" onClick={handleRemoveAllProducts}>
          Remover Todos
        </button>
      </div>
    </CartList>
  );
};
