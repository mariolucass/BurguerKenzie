import { CartList } from "./styles";
import { CartProduct } from "../CartProduct";
import { useCartContext } from "../../contexts";
import { monetizeString } from "../../utils/utils";

export const CartProducts = () => {
  const { setCurrentSale, currentSale, currentSaleValue } = useCartContext();
  const handleRemoveAllProducts = () => setCurrentSale([]);

  const renderCartProducts = currentSale.map((elem) => (
    <CartProduct key={elem.id} product={elem} />
  ));

  return (
    <CartList>
      {renderCartProducts}

      <div className="cartValue">
        <div>
          <span>Total</span>
          <span className="totalValue">{monetizeString(currentSaleValue)}</span>
        </div>

        <button type="submit" onClick={handleRemoveAllProducts}>
          Remover Todos
        </button>
      </div>
    </CartList>
  );
};
