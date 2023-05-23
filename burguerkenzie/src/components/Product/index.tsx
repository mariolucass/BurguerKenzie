import { ProductInterfaceProps } from "../../interfaces";
import { useCartContext } from "../../contexts";
import {
  ButtonDiv,
  ButtonProducts,
  CardProduct,
  ImageProduct,
  TextProduct,
} from "./styles";
import { useNavigate } from "react-router-dom";

export const Product = ({ product }: ProductInterfaceProps) => {
  const navigate = useNavigate();
  const { handleAddToCart } = useCartContext();

  const handleRedirectToProductPage = () => {
    navigate(`/products/${product.id}`);
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

        <ButtonDiv>
          <ButtonProducts onClick={() => handleAddToCart(product.id)}>
            Adicionar
          </ButtonProducts>

          <ButtonProducts onClick={handleRedirectToProductPage}>
            Ver detalhes
          </ButtonProducts>
        </ButtonDiv>
      </TextProduct>
    </CardProduct>
  );
};
