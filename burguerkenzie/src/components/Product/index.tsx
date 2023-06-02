import { Button, Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useCartContext } from "../../contexts";
import { ProductInterfaceProps } from "../../interfaces";
import { animateTransitionBox } from "../../libs/framer";
import { monetizeString } from "../../utils/utils";
import { ButtonDiv, CardProduct, ImageProduct, TextProduct } from "./styles";

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
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1, transition: animateTransitionBox }}
      exit={{ opacity: 0, scale: 0.5 }}
    >
      <ImageProduct>
        <img src={product.img} alt={product.name} />
      </ImageProduct>

      <Divider flexItem />

      <TextProduct>
        <h3>{product.name}</h3>
        <span>{product.category}</span>
        <span className="productPrice">{monetizeString(product.price)}</span>
      </TextProduct>

      <Divider flexItem />

      <ButtonDiv>
        <Button
          variant="contained"
          size="medium"
          onClick={() => handleAddToCart(product.id)}
          sx={{ maxHeight: "48px" }}
        >
          Adicionar
        </Button>
        <Button
          variant="outlined"
          size="medium"
          onClick={handleRedirectToProductPage}
          sx={{ maxHeight: "48px" }}
        >
          Ver detalhes
        </Button>
      </ButtonDiv>
    </CardProduct>
  );
};
