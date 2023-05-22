import { DivCarrinho } from "./styles";
import { EmptyCard } from "./noProduct";
import { CartProducts } from "../../components";
import { useCartContext } from "../../contexts";

export const Cart = () => {
  const { currentSale } = useCartContext();

  return (
    <DivCarrinho>
      <div className="labelCart">
        <h4>Carrinho de compras</h4>
      </div>

      {currentSale.length ? <CartProducts /> : <EmptyCard />}
    </DivCarrinho>
  );
};
