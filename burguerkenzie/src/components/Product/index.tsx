import { toast } from "react-toastify";
import { ProductInterfaceProps } from "../../interfaces";
import { useProductsContext, useCartContext } from "../../contexts";
import {
  ButtonProducts,
  CardProduct,
  ImageProduct,
  TextProduct,
} from "./styles";

export const Product = ({ product }: ProductInterfaceProps) => {
  const { products } = useProductsContext();
  const { setCurrentSale, currentSale } = useCartContext();

  const handleAddToCart = () => {
    const productToAdd = products.find((e) => e.id === product.id);
    if (productToAdd) {
      currentSale.find((e) => e.id === product.id)
        ? toast.error("Esse produto já se encontra no carrinho")
        : setCurrentSale((cartList) => [...cartList, productToAdd]);
    }
  };

  return (
    <CardProduct>
      <ImageProduct>
        <img src={product.img} alt={product.name} />
      </ImageProduct>

      <TextProduct>
        <h3>{product.name}</h3>
        <span>{product.category}</span>
        <span className="productPrice">R$ {product.price}</span>

        <ButtonProducts onClick={handleAddToCart}>Adicionar</ButtonProducts>
      </TextProduct>
    </CardProduct>
  );
};
