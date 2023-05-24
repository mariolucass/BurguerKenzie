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
import { monetizeString } from "../../utils/utils";
import {
  animateHiddenBox,
  animateShownBox,
  animateTransitionBox,
} from "./animations";

export const Product = ({ product }: ProductInterfaceProps) => {
  const navigate = useNavigate();
  const { handleAddToCart } = useCartContext();

  const handleRedirectToProductPage = () => {
    if (product.category === "Sanduíches") {
      navigate(`/products/burguers/${product.id}`);
    } else {
      navigate(`/products/drinks/${product.id}`);
    }
  };

  return (
    <CardProduct
      initial={animateHiddenBox}
      animate={animateShownBox}
      transition={animateTransitionBox}
    >
      <ImageProduct>
        <img src={product.img} alt={product.name} />
      </ImageProduct>

      <TextProduct>
        <h3>{product.name}</h3>
        <span>{product.category}</span>
        <span className="productPrice">{monetizeString(product.price)}</span>

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
