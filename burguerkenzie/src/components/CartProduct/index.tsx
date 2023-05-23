import { useCartContext } from "../../contexts";
import { ProductCartInterfaceProps } from "../../interfaces";
import {
  ButtonRemove,
  CartProductLi,
  ImageCartProduct,
  TextCartProduct,
} from "./styles";

export const CartProduct = ({ product }: ProductCartInterfaceProps) => {
  const { currentSale, handleRemoveFromCart } = useCartContext();

  return (
    <CartProductLi>
      <ImageCartProduct>
        <img src={product.img} alt={product.name} />
      </ImageCartProduct>

      <TextCartProduct>
        <h3>{product.name}</h3>
        <span>{product.category}</span>
      </TextCartProduct>

      <button>+</button>
      <span>{product.quantity}</span>
      <button>-</button>

      <ButtonRemove onClick={() => handleRemoveFromCart(product.id)}>
        Remover
      </ButtonRemove>
    </CartProductLi>
  );
};
