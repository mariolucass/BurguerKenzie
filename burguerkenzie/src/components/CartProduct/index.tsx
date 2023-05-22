import { useCartContext } from "../../contexts";
import { ProductInterfaceProps } from "../../interfaces";
import {
  ButtonRemove,
  CartProductLi,
  ImageCartProduct,
  TextCartProduct,
} from "./styles";

export const CartProduct = ({ product }: ProductInterfaceProps) => {
  const { currentSale, setCurrentSale } = useCartContext();

  const handleRemoveProduct = () => {
    const element = currentSale.find((e) => e.id === product.id);
    const productIndex = currentSale.indexOf(element!);

    currentSale.length === 1
      ? setCurrentSale([])
      : setCurrentSale(currentSale.filter((e, i) => i !== productIndex));
  };

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
      <span>{currentSale.length}</span>
      <button>-</button>

      <ButtonRemove onClick={handleRemoveProduct}>Remover</ButtonRemove>
    </CartProductLi>
  );
};
